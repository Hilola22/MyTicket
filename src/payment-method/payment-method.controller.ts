import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PaymentMethodService } from "./payment-method.service";
import { CreatePaymentMethodDto } from "./dto/create-payment-method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment-method.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { PaymentMethod } from "./schema/payment-method.schema";

@ApiTags("To'lov usuli")
@Controller("payment-method")
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @ApiOperation({ summary: "Yangi to'lov usuli qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi to'lov usuli qo'shildi!",
    type: PaymentMethod,
  })
  @Post()
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @ApiOperation({ summary: "Barcha to'lov usullarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha to'lov usullari ro'yxati",
    type: [PaymentMethod],
  })
  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @ApiOperation({ summary: "To'lov usulini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "To'lov usuli ma'lumotlari",
    type: PaymentMethod,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.paymentMethodService.findOne(id);
  }

  @ApiOperation({ summary: "To'lov usulini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "To'lov usuli ma'lumotlari yangilandi!",
    type: PaymentMethod,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePaymentMethodDto: UpdatePaymentMethodDto
  ) {
    return this.paymentMethodService.update(id, updatePaymentMethodDto);
  }

  @ApiOperation({ summary: "To'lov usulini Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "To'lov usuli o'chirildi!",
    type: PaymentMethod,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.paymentMethodService.remove(id);
  }
}
