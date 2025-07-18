import { Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { Mongoose } from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { Cart, CartSchema } from "./schema/cart.schema";
import {
  TicketStatus,
  TicketStatusSchema,
} from "../ticket-status/schema/ticket-status.schema";
import { Customer, CustomerSchema } from "../customer/schema/customer.schema";
import { Ticket, TicketSchema } from "../ticket/schema/ticket.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Cart.name,
        schema: CartSchema,
      },
      {
        name: TicketStatus.name,
        schema: TicketStatusSchema,
      },
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
      {
        name: Ticket.name,
        schema: TicketSchema,
      },
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
