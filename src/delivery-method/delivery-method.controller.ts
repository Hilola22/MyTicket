import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DeliveryMethodService } from "./delivery-method.service";
import { CreateDeliveryMethodDto } from "./dto/create-delivery-method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery-method.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { DeliveryMethod } from "./schema/delivery-method.schema";

@ApiTags("Yetkazib berish usuli")
@Controller("delivery-method")
export class DeliveryMethodController {
  constructor(private readonly deliveryMethodService: DeliveryMethodService) {}

  @ApiOperation({ summary: "Yangi yetkazib berish usuli qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi yetkazib berish usuli qo'shildi!",
    type: DeliveryMethod,
  })
  @Post()
  create(@Body() createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodService.create(createDeliveryMethodDto);
  }

  @ApiOperation({ summary: "Barcha yetkazib berish usullarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha yetkazib berish usullari ro'yxati",
    type: [DeliveryMethod],
  })
  @Get()
  findAll() {
    return this.deliveryMethodService.findAll();
  }

  @ApiOperation({ summary: "Yetkazib berish usulini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Yetkazib berish usuli ma'lumotlari",
    type: DeliveryMethod,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.deliveryMethodService.findOne(id);
  }

  @ApiOperation({ summary: "Yetkazib berish usulini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Yetkazib berish usuli ma'lumotlari yangilandi!",
    type: DeliveryMethod,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDeliveryMethodDto: UpdateDeliveryMethodDto
  ) {
    return this.deliveryMethodService.update(id, updateDeliveryMethodDto);
  }

  @ApiOperation({ summary: "Yetkazib berish usulini Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Yetkazib berish usuli o'chirildi!",
    type: DeliveryMethod,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.deliveryMethodService.remove(id);
  }
}
