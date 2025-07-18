import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Customer } from "../../customer/schema/customer.schema";
import { District } from "../../districts/schema/district.schema";
import { Region } from "../../region/schema/region.schema";
import { ApiProperty } from "@nestjs/swagger";
import { TicketStatus } from "../../ticket-status/schema/ticket-status.schema";
import { Ticket } from "../../ticket/schema/ticket.schema";

export type CartDocument = HydratedDocument<Cart>;

@Schema({ versionKey: false, timestamps: true })
export class Cart {
  @ApiProperty({
    example: "2025-08-01",
    description: "Korzinkadan olib tashlangan vaqti",
  })
  @Prop()
  finishedAt: Date;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Mijoz IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  })
  customer_id: Customer;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Bilet holati IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "TicketStatus",
  })
  status_id: TicketStatus;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ticket",
      },
    ],
  })
  ticket: Ticket[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);
