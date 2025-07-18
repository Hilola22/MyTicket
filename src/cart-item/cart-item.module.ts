import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from '../ticket/schema/ticket.schema';
import { CartItem, CartItemSchema } from './schema/cart-item.schema';
import { Cart, CartSchema } from '../cart/schema/cart.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: CartItem.name,
      schema: CartItemSchema,
    },
    {
      name: Ticket.name,
      schema: TicketSchema,
    },
    {
      name: Cart.name,
      schema: CartSchema
    }
  ])],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}
