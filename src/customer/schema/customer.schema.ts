import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, mongo } from "mongoose";
import { Gender } from "../../human-category/schema/human-category.schema";
import { Language } from "../../language/schema/language.schema";

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

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  birth_date: Date;

  @Prop()
  gender: Gender;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
    required: true,
  })
  language_id: mongoose.Schema.Types.ObjectId;

  @Prop()
  hashed_refresh_token: string;

  @Prop({ default: true })
  is_active: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
