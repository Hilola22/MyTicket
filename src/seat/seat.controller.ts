import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Seat } from "./schema/seat.schema";

@ApiTags("O'rindiqlar")
@Controller("seat")
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({ summary: "Yangi o'rindiq qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi o'rindiq qo'shildi!",
    type: Seat,
  })
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @ApiOperation({ summary: "Barcha o'rindiqlarni olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha o'rindiqlar ro'yxati",
    type: [Seat],
  })
  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation({ summary: "O'rindiqni Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "O'rindiq ma'lumotlari",
    type: Seat,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.seatService.findOne(id);
  }

  @ApiOperation({ summary: "O'rindiqni Id orqali yangilash" })
  @ApiResponse({ status: 200, description: "O'rindiq yangilandi!", type: Seat })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(id, updateSeatDto);
  }

  @ApiOperation({ summary: "O'rindiqni Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "O'rindiq o'chirildi!", type: Seat })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.seatService.remove(id);
  }
}
