import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Customer } from "../../customer/schema/customer.schema";

export type CustomerCardDocument = HydratedDocument<CustomerCard>;

@Schema({ versionKey: false, timestamps: false })
export class CustomerCard {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  })
  customer_id: Customer;

  @Prop()
  phone: string;

  @Prop()
  number: string;

  @Prop()
  year: string;

  @Prop()
  month: string;

  @Prop({ default: false })
  is_active: boolean;

  @Prop({ default: true })
  is_main: boolean;
}

export const CustomerCardSchema = SchemaFactory.createForClass(CustomerCard);
