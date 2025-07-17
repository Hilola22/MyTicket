import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, HydrateOptions, mongo } from "mongoose";
import { EventType } from "../../event-type/schema/event-type.entity";
import { HumanCategory } from "../../human-category/schema/human-category.schema";
import { Language } from "../../language/schema/language.schema";

export type EventDocument = HydratedDocument<Event>

@Schema({ versionKey: false, timestamps: false })
export class Event {
  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop()
  start_date: Date;

  @Prop()
  start_time: string;

  @Prop()
  finish_date: Date;

  @Prop()
  finish_time: string;

  @Prop()
  info: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventType",
  })
  event_type_id: EventType;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "HumanCategory",
  })
  human_category_id: HumanCategory;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
  })
  lang_id: Language;

  @Prop()
  release_date: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
