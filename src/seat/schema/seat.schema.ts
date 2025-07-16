import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { SeatType } from "../../seat-type/schema/seat-type.schema";
import { Venue } from "../../venue/schema/venue.schema";
import { ApiProperty } from "@nestjs/swagger";

export type SeatDocument = HydratedDocument<Seat>;

@Schema({ versionKey: false, timestamps: false })
export class Seat {
  @ApiProperty({ example: 1, description: "Sektor raqami" })
  @Prop()
  scetor: number;

  @ApiProperty({ example: 5, description: "Qator raqami" })
  @Prop()
  row_number: number;

  @ApiProperty({ example: 12, description: "O'rindiq raqami" })
  @Prop()
  number: number;

  @ApiProperty({ example: "A-5-12", description: "Joylashuv (sxemadagi)" })
  @Prop()
  location_in_schema: string;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c99",
    description: "Venue IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venue",
  })
  venue_id: Venue;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c88",
    description: "SeatType IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "SeatType",
  })
  seat_type_id: SeatType;
}

export const SeatSchema = SchemaFactory.createForClass(Seat);
