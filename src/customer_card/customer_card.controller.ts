import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustomerCardService } from "./customer_card.service";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CustomerCard } from "./schema/customer_card.schema";

@ApiTags("Mijoz kartalari")
@Controller("customer-card")
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @ApiOperation({ summary: "Yangi mijoz kartasini qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi mijoz kartasi qo'shildi!",
    type: CustomerCard,
  })
  @Post()
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @ApiOperation({ summary: "Barcha mijoz kartalarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha mijoz kartalari ro'yxati",
    type: [CustomerCard],
  })
  @Get()
  findAll() {
    return this.customerCardService.findAll();
  }

  @ApiOperation({ summary: "Mijoz kartasini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Mijoz kartasi ma'lumotlari",
    type: CustomerCard,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerCardService.findOne(id);
  }

  @ApiOperation({ summary: "Mijoz kartasini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Mijoz kartasi yangilandi!",
    type: CustomerCard,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto
  ) {
    return this.customerCardService.update(id, updateCustomerCardDto);
  }

  @ApiOperation({ summary: "Mijoz kartasini Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Mijoz kartasi o'chirildi!" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerCardService.remove(id);
  }
}
