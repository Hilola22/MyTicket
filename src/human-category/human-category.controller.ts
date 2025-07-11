import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { HumanCategoryService } from "./human-category.service";
import { CreateHumanCategoryDto } from "./dto/create-human-category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human-category.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { HumanCategory } from "./schema/human-category.schema";

@ApiTags("Inson kategoriyasi")
@Controller("human-category")
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  @ApiOperation({ summary: "Yangi inson kategoriyasi qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi inson kategoriyasi qo'shildi!",
    type: HumanCategory,
  })
  @Post()
  create(@Body() createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryService.create(createHumanCategoryDto);
  }

  @ApiOperation({ summary: "Barcha inson kategoriyalarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha inson kategoriyalari ro'yxati",
    type: [HumanCategory],
  })
  @Get()
  findAll() {
    return this.humanCategoryService.findAll();
  }

  @ApiOperation({ summary: "Inson kategoriyasini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Inson kategoriyasi ma'lumotlari",
    type: HumanCategory,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.humanCategoryService.findOne(id);
  }

  @ApiOperation({ summary: "Inson kategoriyasini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Inson kategoriyasi ma'lumotlari yangilandi!",
    type: HumanCategory,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto
  ) {
    return this.humanCategoryService.update(id, updateHumanCategoryDto);
  }

  @ApiOperation({ summary: "Inson kategoriyasini Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Inson kategoriyasi o'chirildi!",
    type: HumanCategory,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.humanCategoryService.remove(id);
  }
}
