import { Module } from "@nestjs/common";
import { BookingService } from "./booking.service";
import { BookingController } from "./booking.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Booking, BookingSchema } from "./schema/booking.entity";
import {
  DeliveryMethod,
  DeliveryMethodSchema,
} from "src/delivery-method/schema/delivery-method.schema";
import {
  PaymentMethod,
  PaymentMethodSchema,
} from "src/payment-method/schema/payment-method.schema";
import {
  TicketStatus,
  TicketStatusSchema,
} from "src/ticket-status/schema/ticket-status.schema";
import { Cart, CartSchema } from "src/cart/schema/cart.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Booking.name,
        schema: BookingSchema,
      },
      {
        name: DeliveryMethod.name,
        schema: DeliveryMethodSchema,
      },
      {
        name: PaymentMethod.name,
        schema: PaymentMethodSchema,
      },
      {
        name: TicketStatus.name,
        schema: TicketStatusSchema,
      },
      {
        name: Cart.name,
        schema: CartSchema,
      },
    ]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
