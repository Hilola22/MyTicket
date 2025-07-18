import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CartItem } from './schema/cart-item.schema';

@ApiTags('Korzina itemlari')
@Controller('cart-item')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @ApiOperation({ summary: "Yangi korzina itemi yaratish" })
  @ApiResponse({ status: 201, description: "Yangi korzina itemi yaratildi!", type: CartItem })
  @Post()
  create(@Body() createCartItemDto: CreateCartItemDto) {
    return this.cartItemService.create(createCartItemDto);
  }

  @ApiOperation({ summary: "Barcha korzina itemlarini olish" })
  @ApiResponse({ status: 200, description: "Barcha korzina itemlari ro'yxati", type: [CartItem] })
  @Get()
  findAll() {
    return this.cartItemService.findAll();
  }

  @ApiOperation({ summary: "Korzina itemini Id orqali olish" })
  @ApiResponse({ status: 200, description: "Korzina itemi ma'lumotlari", type: CartItem })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartItemService.findOne(id);
  }

  @ApiOperation({ summary: "Korzina itemini Id orqali yangilash" })
  @ApiResponse({ status: 200, description: "Korzina itemi yangilandi!", type: CartItem })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemService.update(id, updateCartItemDto);
  }

  @ApiOperation({ summary: "Korzina itemini Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Korzina itemi o'chirildi!" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartItemService.remove(id);
  }
}
