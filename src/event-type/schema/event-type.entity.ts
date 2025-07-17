import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EventTypeDocument = HydratedDocument<EventType>;

@Schema({ versionKey: false, timestamps: false })
export class EventType {
  @Prop()
  name: string;

  @Prop({
    type: [{ type: "ObjectId", ref: "EventType" }],
  })
  parent_event_type_id: EventType;
}

export const EventTypeSchema = SchemaFactory.createForClass(EventType);
