import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Customer } from "./schema/customer.schema";

@ApiTags("Mijoz")
@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: "Yangi mijoz qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi mijoz qo'shildi!",
    type: Customer,
  })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiOperation({ summary: "Barcha mijozlarni olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha mijozlar ro'yxati",
    type: [Customer],
  })
  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: "Mijozni Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Mijoz ma'lumotlari",
    type: Customer,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerService.findOne(id);
  }

  @ApiOperation({ summary: "Mijozni email orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Mijoz ma'lumotlari",
    type: Customer,
  })
  @Get("email/:email")
  findByEmail(@Param("email") email: string) {
    return this.customerService.findByEmail(email);
  }

  @ApiOperation({ summary: "Mijozni Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Mijoz ma'lumotlari yangilandi!",
    type: Customer,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customerService.update(id, updateCustomerDto);
  }

  @ApiOperation({ summary: "Mijozni Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Mijoz o'chirildi!",
    type: Customer,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerService.remove(id);
  }
}
