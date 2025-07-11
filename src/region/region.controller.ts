import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Region } from './schema/region.schema';

@ApiTags("Viloyat")
@Controller("region")
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @ApiOperation({ summary: "Viloyat qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Viloyat qo'shildi!",
    type: Region,
  })
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: "Barcha viloyatlarni ro'yxatini olish" })
  @ApiResponse({
    status: 200,
    description: "Viloyatlar: ",
    type: [Region],
  })
  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @ApiOperation({ summary: "Viloyatni Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Viloyat:  ",
    type: Region,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.regionService.findOne(id);
  }

  @ApiOperation({ summary: "Viloyatni Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Viloyat ma'lumotlari yangilandi!",
    type: Region,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRegionDto: UpdateRegionDto) {
    return this.regionService.update(id, updateRegionDto);
  }

  @ApiOperation({ summary: "Viloyat ma'lumotlarini Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Viloyat ma'lumotlari o'chirish!",
    type: Region,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.regionService.remove(id);
  }
}
