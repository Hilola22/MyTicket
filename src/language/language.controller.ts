import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Language } from './schema/language.schema';

@ApiTags("Tillar")
@Controller("language")
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @ApiOperation({ summary: "Yangi til qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi til qo'shildi!",
    type: Language,
  })
  @Post()
  create(@Body() createLanguageDto: CreateLanguageDto) {
    return this.languageService.create(createLanguageDto);
  }

  @ApiOperation({ summary: "Barcha tillar ro'yxatini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha tillar: ",
    type: [Language],
  })
  @Get()
  findAll() {
    return this.languageService.findAll();
  }

  @ApiOperation({ summary: "Tilni Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Til ma'lumotlari: ",
    type: Language,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.languageService.findOne(id);
  }

  @ApiOperation({ summary: "Tilni Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Til ma'lumotlari yangilandi",
    type: Language,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateLanguageDto: UpdateLanguageDto
  ) {
    return this.languageService.update(id, updateLanguageDto);
  }

  @ApiOperation({ summary: "Tilni Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Til ma'lumotlari o'chirildi",
    type: Language,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.languageService.remove(id);
  }
}
