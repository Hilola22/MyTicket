import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Ticket } from "../../ticket/schema/ticket.schema";
import { Cart } from "../../cart/schema/cart.schema";

export type CartItemDocument = HydratedDocument<CartItem>;

@Schema({ versionKey: false, timestamps: true })
export class CartItem {
  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Savat IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  })
  cart_id: Cart;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Bilet IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ticket",
  })
  ticket_id: Ticket;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);
