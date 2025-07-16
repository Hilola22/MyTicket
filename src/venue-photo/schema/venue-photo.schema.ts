import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Venue } from "../../venue/schema/venue.schema";

export type VenuePhotoDocument = HydratedDocument<VenuePhoto>;

@Schema({ versionKey: false, timestamps: false })
export class VenuePhoto {
  @Prop()
  url: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venue"
  })
  venueId: Venue;
}

export const VenuePhotoSchema = SchemaFactory.createForClass(VenuePhoto);
