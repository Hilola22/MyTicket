import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Gender } from "../../human-category/schema/human-category.schema";

export type CustomerDocument = HydratedDocument<Customer>;

@Schema({ versionKey: false, timestamps: false })
export class Customer {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  phone: string;

  @Prop()
  hashed_password: string;

  @Prop({required: true, unique:true})
  email: string;

  @Prop()
  birth_date: Date;

  @Prop()
  gender: Gender;

  @Prop()
  lang_id: number;

  @Prop()
  hashed_refresh_token: string;
}

export const CustomerSchema =
  SchemaFactory.createForClass(Customer);
