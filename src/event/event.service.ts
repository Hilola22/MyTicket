import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Event } from "./schema/event.schema";
import { Model } from "mongoose";

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) private readonly eventSchema: Model<Event>
  ) {}
  create(createEventDto: CreateEventDto) {
    return this.eventSchema.create(createEventDto);
  }

  findAll() {
    return this.eventSchema.find();
  }

  findOne(id: number) {
    return this.eventSchema.findById(id);
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventSchema.findByIdAndUpdate(id, updateEventDto, {
      new: true,
    });
  }

  remove(id: number) {
    return this.eventSchema.findByIdAndDelete(id);
  }
}
