import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Cart } from './schema/cart.schema';

@ApiTags('Korzina')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: "Yangi korzina yaratish" })
  @ApiResponse({ status: 201, description: "Yangi korzina yaratildi!", type: Cart })
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({ summary: "Barcha korzinalarni olish" })
  @ApiResponse({ status: 200, description: "Barcha korzinalar ro'yxati", type: [Cart] })
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: "Korzina Id orqali olish" })
  @ApiResponse({ status: 200, description: "Korzina ma'lumotlari", type: Cart })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }

  @ApiOperation({ summary: "Korzina Id orqali yangilash" })
  @ApiResponse({ status: 200, description: "Korzina yangilandi!", type: Cart })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(id, updateCartDto);
  }

  @ApiOperation({ summary: "Korzina Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Korzina o'chirildi!" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
