import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Seat } from "src/seat/schema/seat.schema";

export type SeatTypeDocument = HydratedDocument<SeatType>;

@Schema({ versionKey: false, timestamps: false })
export class SeatType {
  @ApiProperty({
    example: "VIP",
    description: "O'rindiq turi nomi, masalan: VIP, Oddiy, Balkon va h.k.",
  })
  @Prop()
  name: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seat",
      },
    ],
  })
  seats: Seat[];
}

export const SeatTypeSchema = SchemaFactory.createForClass(SeatType);
