import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Types } from './schema/type.schema';

@ApiTags("Tadbir turlari")
@Controller("types")
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @ApiOperation({ summary: "Yangi tadbir turi qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi tadbir turi qo'shildi!",
    type: Types,
  })
  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @ApiOperation({ summary: "Barcha tadbir turlarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha tadbir turlari: ",
    type: [Types],
  })
  @Get()
  findAll() {
    return this.typesService.findAll();
  }

  @ApiOperation({ summary: "Tadbir turini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Tadbir turi: ",
    type: Types,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.typesService.findOne(id);
  }

  @ApiOperation({ summary: "Tadbir turini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Tadbir turi yangilandi!",
    type: Types,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(id, updateTypeDto);
  }

  @ApiOperation({ summary: "Tadbir turini Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Bu tadbir turi o'chirildi! ",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.typesService.remove(id);
  }
}
