import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Region } from "../../region/schema/region.schema";
import { District } from "../../districts/schema/district.schema";

export type VenueDocument = HydratedDocument<Venue>;

@Schema({ versionKey: false, timestamps: false })
export class Venue {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  location: string;

  @Prop()
  site: string;

  @Prop()
  schema: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
  })
  regionId: Region;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
  })
  districtId: District;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "VenuePhoto",
      },
    ],
    default: [],
  })
  photos: mongoose.Types.ObjectId[];

}

export const VenueSchema = SchemaFactory.createForClass(Venue);
