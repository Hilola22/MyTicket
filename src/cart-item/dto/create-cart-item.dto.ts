import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";

export class CreateCartItemDto {
  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Savat IDsi",
    type: String,
  })
  cart_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Bilet IDsi",
    type: String,
  })
  ticket_id: mongoose.Schema.Types.ObjectId;
}
