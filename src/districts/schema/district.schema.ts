import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Region } from "../../region/schema/region.schema";
import { ApiProperty } from "@nestjs/swagger";

export type DistrictDocument = HydratedDocument<District>;

@Schema({ versionKey: false, timestamps: false })
export class District {
  @ApiProperty({ example: "Yunusobod", description: "Tuman nomi" })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c86",
    description: "Region IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
  })
  region_id: Region;
}

export const DistrictSchema = SchemaFactory.createForClass(District);
