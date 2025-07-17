import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Event } from "./schema/event.schema";
import { Model } from "mongoose";
import { EventType } from "../event-type/schema/event-type.entity";
import { Language } from "../language/schema/language.schema";
import { HumanCategory } from "../human-category/schema/human-category.schema";

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) private readonly eventSchema: Model<Event>,
    @InjectModel(EventType.name) private readonly eventTypeSchema: Model<EventType>,
    @InjectModel(Language.name) private readonly languageSchema: Model<Language>,
    @InjectModel(HumanCategory.name) private readonly humanCategorySchema: Model<HumanCategory>,
  ) {}
  async create(createEventDto: CreateEventDto) {
    const {lang_id, event_type_id, human_category_id } = createEventDto;
    const lang = await this.languageSchema.findById(lang_id);
    if(!lang){
      throw new NotFoundException("Bunday til topilmadi")
    }
    const eventType = await this.eventTypeSchema.findById(event_type_id);
    if(!eventType){
      throw new NotFoundException("Bunday tadbir turi topilmadi")
    }
    const humanCategory = await this.humanCategorySchema.findById(human_category_id);
    if(!humanCategory){
      throw new NotFoundException("Bunday yosh chegaralari topilmadi")
    }
    return this.eventSchema.create(createEventDto);
  }

  findAll() {
    return this.eventSchema
      .find()
      .populate("event_type_id")
      .populate("lang_id")
      .populate("human_category_id");
  }

  findOne(id: string) {
    return this.eventSchema
      .findById(id)
      .populate("event_type_id")
      .populate("lang_id")
      .populate("human_category_id");;
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.eventSchema.findByIdAndUpdate(id, updateEventDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.eventSchema.findByIdAndDelete(id);
  }
}
