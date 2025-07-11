import { Body, Controller, HttpCode, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { LoginAdminDto } from "../admin/dto/login-admin.dto";
import { Response } from "express";
import { CookieGetter } from "../common/decorators/cookie-getter.decorators";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("registration")
  async registration(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.registration(createAdminDto);
  }

  @Post("login")
  async login(
    @Body() loginAdminDto: LoginAdminDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.login(loginAdminDto, res);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signout")
  signoutUser(
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.logout(refreshToken, res);
  }

  @HttpCode(HttpStatus.OK)
  @Post(":id/refresh")
  refreshUser(
    @Param("id") id: string,
    @CookieGetter("refreshToken") refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.refreshAdmin(id, refreshToken, res);
  }
}
