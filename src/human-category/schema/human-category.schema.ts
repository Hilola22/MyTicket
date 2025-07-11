import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type HumanCategoryDocument = HydratedDocument<HumanCategory>;

export enum Gender {
  FEMALE = "female",
  MALE = "male",
}

@Schema({ versionKey: false, timestamps: false })
export class HumanCategory {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  start_age: number;

  @Prop({ required: true })
  finish_age: number;

  @Prop({ required: true })
  gender: Gender;
}

export const HumanCategorySchema = SchemaFactory.createForClass(HumanCategory);
