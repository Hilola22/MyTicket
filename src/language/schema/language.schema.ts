import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type LanguageDocument = HydratedDocument<Language>;

@Schema({ versionKey: false, timestamps: false })
export class Language {
  @Prop()
  name: string;

  @Prop({
    type: [{ type: "ObjectId", ref: "Customer" }],
    default: [],
  })
  customers: string[];
}

export const LanguageSchema = SchemaFactory.createForClass(Language);
