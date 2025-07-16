import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DistrictsService } from "./districts.service";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { District } from "./schema/district.schema";

@ApiTags("Tumanlar")
@Controller("districts")
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  @ApiOperation({ summary: "Yangi tuman qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi tuman qo'shildi!",
    type: District,
  })
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtsService.create(createDistrictDto);
  }

  @ApiOperation({ summary: "Barcha tumanlarni olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha tumanlar ro'yxati",
    type: [District],
  })
  @Get()
  findAll() {
    return this.districtsService.findAll();
  }

  @ApiOperation({ summary: "Tumanni Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Tuman ma'lumotlari",
    type: District,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.districtsService.findOne(id);
  }

  @ApiOperation({ summary: "Tumanni Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Tuman yangilandi!",
    type: District,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDistrictDto: UpdateDistrictDto
  ) {
    return this.districtsService.update(id, updateDistrictDto);
  }

  @ApiOperation({ summary: "Tumanni Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Tuman o'chirildi!",
    type: District,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.districtsService.remove(id);
  }
}
