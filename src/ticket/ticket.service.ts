import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Ticket } from "./schema/ticket.schema";
import { Model } from "mongoose";
import { TicketStatus } from "../ticket-status/schema/ticket-status.schema";
import { Seat } from "../seat/schema/seat.schema";
import { Event } from "../event/schema/event.schema";

@Injectable()
export class TicketService {
  constructor(
    @InjectModel(Ticket.name) private readonly ticketSchema: Model<Ticket>,
    @InjectModel(TicketStatus.name)
    private readonly ticketStatusSchema: Model<TicketStatus>,
    @InjectModel(Seat.name) private readonly seatSchema: Model<Seat>,
    @InjectModel(Event.name) private readonly eventSchema: Model<Event>
  ) {}
  async create(createTicketDto: CreateTicketDto) {
    const { event_id, seat_id, status_id } = createTicketDto;
    const event = await this.eventSchema.findById(event_id);
    if (!event) {
      throw new NotFoundException("Bunday tadbir topilmadi!");
    }
    const seat = await this.seatSchema.findById(seat_id);
    if (!seat) {
      throw new NotFoundException("Bunday o'rindiq topilmadi!");
    }
    const status = await this.ticketStatusSchema.findById(status_id);
    if (!status) {
      throw new NotFoundException("Bunday status topilmadi!");
    }
    const newTicket = await this.ticketSchema.create(createTicketDto);
    return newTicket;
  }

  findAll() {
    return this.ticketSchema
      .find()
      .populate("event_id")
      .populate("seat_id")
      .populate("status_id");
  }

  findOne(id: string) {
    return this.ticketSchema
      .findById(id)
      .populate("event_id")
      .populate("seat_id")
      .populate("status_id");;
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return this.ticketSchema.findByIdAndUpdate(id, updateTicketDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.ticketSchema.findByIdAndDelete(id);
  }
}
