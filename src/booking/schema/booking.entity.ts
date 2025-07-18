import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Cart } from "../../cart/schema/cart.schema";
import { PaymentMethod } from "../../payment-method/schema/payment-method.schema";
import { DeliveryMethod } from "../../delivery-method/schema/delivery-method.schema";
import { TicketStatus } from "../../ticket-status/schema/ticket-status.schema";

export type BookingDocument = HydratedDocument<Booking>

@Schema()
export class Booking {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  })
  cart_id: Cart;

  @Prop()
  createdAt: Date;

  @Prop()
  finishedAt: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "PaymentMethod",
  })
  payment_method_id: PaymentMethod;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryMethod",
  })
  delivery_method_id: DeliveryMethod;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "TicketStatus",
  })
  status_id: TicketStatus;

  @Prop()
  discount_coupon_id: number;
}

export const BookingSchema = SchemaFactory.createForClass(Booking)

