import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty({ example: 100000, description: "Chipta narxi (so‘mda)" })
  price: number;

  @ApiProperty({ example: 5000, description: "Xizmat haqi (so‘mda)" })
  service_fee: number;

  @ApiProperty({
    example: "60f7c0b8b4d1c8001c8e4b1f",
    description: "Tadbir IDsi",
  })
  event_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    example: "60f7c0b8b4d1c8001c8e4b20",
    description: "Chipta statusi IDsi",
  })
  status_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    example: "60f7c0b8b4d1c8001c8e4b21",
    description: "O'rindiq IDsi",
  })
  seat_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ example: "VIP", description: "Chipta turi" })
  ticket_type: string;
}
