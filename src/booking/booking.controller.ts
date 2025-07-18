import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BookingService } from "./booking.service";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

@ApiTags("Band qilish")
@Controller("booking")
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: "Yangi band qilish yaratish" })
  @ApiResponse({
    status: 201,
    description: "Band qilish muvaffaqiyatli yaratildi.",
  })
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: "Barcha band qilinganlarni olish" })
  @ApiResponse({ status: 200, description: "Band qilinganlar ro'yxati." })
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: "ID bo'yicha band qilingan ma'lumotni olish" })
  @ApiResponse({ status: 200, description: "Band qilingan topildi." })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookingService.findOne(id);
  }

  @ApiOperation({ summary: "ID bo'yicha band qilingan ma'lumotni yangilash" })
  @ApiResponse({ status: 200, description: "Band qilingan yangilandi." })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(id, updateBookingDto);
  }

  @ApiOperation({ summary: "ID bo'yicha band qilingan ma'lumotni o'chirish" })
  @ApiResponse({ status: 200, description: "Band qilingan o'chirildi." })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookingService.remove(id);
  }
}
