import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PaymentMethodDocument = HydratedDocument<PaymentMethod>;

export enum PaymentMethodEnum {
  CASH = "CASH",
  CARD = "CARD",
  CLICK = "CLICK",
  PAYME = "PAYME",
}

@Schema({ versionKey: false, timestamps: false })
export class PaymentMethod {
  @Prop({ enum: PaymentMethodEnum, required: true })
  name: PaymentMethodEnum;
}

export const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);
