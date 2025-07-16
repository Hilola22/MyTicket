import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, HydrateOptions } from "mongoose";

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

  @Prop()
  enent_type_id: bigint;

  @Prop()
  human_category_id: bigint;

  @Prop()
  lang_id: bigint;

  @Prop()
  release_date: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
