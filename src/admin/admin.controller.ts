import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Admin } from './schema/admin.schema';

@ApiTags('Adminlar')
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: "Yangi admin qo'shish" })
  @ApiResponse({ status: 201, description: "Yangi admin qo'shildi!", type: Admin })
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: "Barcha adminlarni olish" })
  @ApiResponse({ status: 200, description: "Barcha adminlar ro'yxati", type: [Admin] })
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: "Adminni Id orqali olish" })
  @ApiResponse({ status: 200, description: "Admin ma'lumotlari", type: Admin })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(id);
  }

  @ApiOperation({ summary: "Adminni email orqali olish" })
  @ApiResponse({ status: 200, description: "Admin ma'lumotlari", type: Admin })
  @Get("email/:email")
  findByEmail(@Param("email") email: string) {
    return this.adminService.findByEmail(email);
  }

  @ApiOperation({ summary: "Adminni Id orqali yangilash" })
  @ApiResponse({ status: 200, description: "Admin yangilandi!", type: Admin })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(id, updateAdminDto);
  }

  @ApiOperation({ summary: "Admin refresh tokenini yangilash" })
  @ApiResponse({ status: 200, description: "Admin refresh token yangilandi!", type: Admin })
  @Patch(":id/refresh-token")
  updateRefreshToken(
    @Param("id") id: string,
    @Body() body: { refreshToken: string }
  ) {
    return this.adminService.updateRefreshToken(id, body.refreshToken);
  }

  @ApiOperation({ summary: "Adminni Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Admin o'chirildi!" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(id);
  }
}
