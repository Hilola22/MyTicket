import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { AdminDocument } from "../admin/schema/admin.schema";
import { JwtService } from "@nestjs/jwt";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { LoginAdminDto } from "../admin/dto/login-admin.dto";
import * as bcrypt from "bcrypt";
import { Response } from "express";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly adminService: AdminService
  ) {}

  private async generateTokens(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async registration(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findByEmail(createAdminDto.email);
    if (candidate) {
      throw new ConflictException("This admin registered before!");
    }
    const admin = await this.adminService.create(createAdminDto);

    return { admin: admin.id };
  }

  async login(loginAdminDto: LoginAdminDto, res: Response) {
    const admin = await this.adminService.findByEmail(loginAdminDto.email);
    if (!admin) {
      throw new UnauthorizedException("Email or password incorrect!");
    }

    const isValidPassword = await bcrypt.compare(
      loginAdminDto.password,
      admin.hashed_password
    );
    if (!isValidPassword) {
      throw new UnauthorizedException("Email or password incorrect!");
    }

    const { accessToken, refreshToken } = await this.generateTokens(admin);
    admin.hashed_refresh_token = await bcrypt.hash(refreshToken, 7);

    await admin.save();

    res.cookie("refreshToken", refreshToken, {
      maxAge: +process.env.COOKIE_TIME!,
      httpOnly: true,
    });

    return { admin: admin.id, accessToken };
  }

  async logout(refreshToken: string, res: Response) {
    let adminData: any;
    try {
      adminData = await this.jwtService.verify(refreshToken, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });
    } catch (error) {
      console.log("Error on logout: ", error);
      throw new BadRequestException(error);
    }
    if (!adminData) {
      throw new ForbiddenException("Admin not verified!");
    }

    await this.adminService.updateRefreshToken(adminData.id, "");

    res.clearCookie("refreshToken");
    return { message: "Admin logged out successfully!" };
  }

  async refreshAdmin(
    adminId: string,
    refreshTokenFromCookie: string,
    res: Response
  ) {
    const decodedToken = await this.jwtService.decode(refreshTokenFromCookie);
    if (adminId !== decodedToken["id"]) {
      throw new ForbiddenException("Not allowed!");
    }

    const admin = await this.adminService.findOne(adminId);

    if (!admin || !admin.hashed_refresh_token) {
      throw new NotFoundException("Admin not found!");
    }

    const tokenMatch = await bcrypt.compare(
      refreshTokenFromCookie,
      admin.hashed_refresh_token
    );

    if (!tokenMatch) {
      throw new ForbiddenException("Forbidden");
    }

    const { accessToken, refreshToken } = await this.generateTokens(admin);
    const refresh_token = await bcrypt.hash(refreshToken, 7);
    await this.adminService.updateRefreshToken(admin.id, refresh_token);
    res.cookie("refreshToken", refreshToken, {
      maxAge: +process.env.COOKIE_TIME!,
      httpOnly: true,
    });
    const response = {
      message: "Admin refreshed!",
      adminId: admin.id,
      accessToken: accessToken,
    };
    return response;
  }
}
