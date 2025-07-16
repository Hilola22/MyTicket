import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustomerAddressService } from "./customer-address.service";
import { CreateCustomerAddressDto } from "./dto/create-customer-address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer-address.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CustomerAddress } from "./schema/customer-address.entity";

@ApiTags("Mijoz manzili")
@Controller("customer-address")
export class CustomerAddressController {
  constructor(
    private readonly customerAddressService: CustomerAddressService
  ) {}

  @ApiOperation({ summary: "Yangi mijoz manzili qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi mijoz manzili qo'shildi!",
    type: CustomerAddress,
  })
  @Post()
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @ApiOperation({ summary: "Barcha mijoz manzillarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha mijoz manzillari ro'yxati",
    type: [CustomerAddress],
  })
  @Get()
  findAll() {
    return this.customerAddressService.findAll();
  }

  @ApiOperation({ summary: "Mijoz manzilini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Mijoz manzili ma'lumotlari",
    type: CustomerAddress,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerAddressService.findOne(id);
  }

  @ApiOperation({ summary: "Mijoz manzilini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Mijoz manzili yangilandi!",
    type: CustomerAddress,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerAddressDto: UpdateCustomerAddressDto
  ) {
    return this.customerAddressService.update(id, updateCustomerAddressDto);
  }

  @ApiOperation({ summary: "Mijoz manzilini Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Mijoz manzili o'chirildi!",
    type: CustomerAddress,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.customerAddressService.remove(id);
  }
}
