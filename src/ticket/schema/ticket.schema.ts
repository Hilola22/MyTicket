import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, mongo } from "mongoose";
import { TicketStatus } from "../../ticket-status/schema/ticket-status.schema";
import { Seat } from "../../seat/schema/seat.schema";
import { Event } from "../../event/schema/event.schema";
import { Cart } from "../../cart/schema/cart.schema";

export type TicketDocument = HydratedDocument<Ticket >;

@Schema({ versionKey: false, timestamps: false })
export class Ticket  {
  @Prop()
  price: number;

  @Prop()
  service_fee: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  })
  event_id: Event;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "TicketStatus"
  })
  status_id: TicketStatus;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seat"
  })
  seat_id: Seat;

  @Prop()
  ticket_type: string;

  @Prop({
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    }]
  })
  carts: Cart[]
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
