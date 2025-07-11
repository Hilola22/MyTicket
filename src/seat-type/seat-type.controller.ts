import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SeatTypeService } from "./seat-type.service";
import { CreateSeatTypeDto } from "./dto/create-seat-type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat-type.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { SeatType } from "./schema/seat-type.schema";

@ApiTags("O'rindiq turi")
@Controller("seat-type")
export class SeatTypeController {
  constructor(private readonly seatTypeService: SeatTypeService) {}

  @ApiOperation({ summary: "Yangi o'rindiq turi qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi o'rindiq turi qo'shildi!",
    type: SeatType,
  })
  @Post()
  create(@Body() createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeService.create(createSeatTypeDto);
  }

  @ApiOperation({ summary: "Barcha o'rindiq turlarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha o'rindiq turlari ro'yxati",
    type: [SeatType],
  })
  @Get()
  findAll() {
    return this.seatTypeService.findAll();
  }

  @ApiOperation({ summary: "O'rindiq turini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "O'rindiq turi ma'lumotlari",
    type: SeatType,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.seatTypeService.findOne(id);
  }

  @ApiOperation({ summary: "O'rindiq turini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "O'rindiq turi ma'lumotlari yangilandi!",
    type: SeatType,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateSeatTypeDto: UpdateSeatTypeDto
  ) {
    return this.seatTypeService.update(id, updateSeatTypeDto);
  }

  @ApiOperation({ summary: "O'rindiq turini Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "O'rindiq turi o'chirildi!",
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.seatTypeService.remove(id);
  }
}
