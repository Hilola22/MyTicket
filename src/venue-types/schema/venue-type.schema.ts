import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VenueTypesDocument = HydratedDocument<VenueTypes>;

@Schema({ versionKey: false, timestamps: false })
export class VenueTypes {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue", required: true })
  venueId: mongoose.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Types", required: true })
  typeId: mongoose.Types.ObjectId;
}

export const VenueTypesSchema = SchemaFactory.createForClass(VenueTypes);
