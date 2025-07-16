import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { District } from "../../districts/schema/district.schema";

export type RegionDocument = HydratedDocument<Region>;

@Schema({ versionKey: false, timestamps: false })
export class Region {
  @Prop({required: true})
  name: string;

  @Prop({
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "District"
    }],
  })
  districts: District[]
}

export const RegionSchema = SchemaFactory.createForClass(Region)