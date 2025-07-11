import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DeliveryMethodDocument = HydratedDocument<DeliveryMethod>;

export enum DeliveryMethodEnum {
  DELIVERY = "DELIVERY",
  ONLINE = "ONLINE",
}

@Schema({ versionKey: false, timestamps: false })
export class DeliveryMethod {
  @Prop({ enum: DeliveryMethodEnum, required: true })
  name: DeliveryMethodEnum;
}

export const DeliveryMethodSchema =
  SchemaFactory.createForClass(DeliveryMethod);
