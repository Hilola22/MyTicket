import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Venue } from "../../venue/schema/venue.schema";

export type TypesDocument = HydratedDocument<Types>;

@Schema({ versionKey: false, timestamps: false })
export class Types {
  @Prop()
  name: string;

  @Prop({
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venue"
    }]
  })
  venues: Venue[]
}

export const TypesSchema = SchemaFactory.createForClass(Types);