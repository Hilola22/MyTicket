import { Injectable } from "@nestjs/common";
import { CreateEventTypeDto } from "./dto/create-event-type.dto";
import { UpdateEventTypeDto } from "./dto/update-event-type.dto";
import { InjectModel } from "@nestjs/mongoose";
import { EventType } from "./schema/event-type.entity";
import { Model } from "mongoose";

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType.name)
    private readonly eventTypeSchema: Model<EventType>
  ) {}
  create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeSchema.create(createEventTypeDto);
  }

  findAll() {
    return this.eventTypeSchema.find().populate("parent_event_type_id");
  }

  findOne(id: string) {
    return this.eventTypeSchema.findById(id).populate("parent_event_type_id");
  }

  update(id: string, updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeSchema.findByIdAndUpdate(id, updateEventTypeDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.eventTypeSchema.findByIdAndDelete(id);
  }
}
