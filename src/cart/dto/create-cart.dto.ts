import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";

export class CreateCartDto {
  @ApiProperty({
    example: "2025-08-01",
    description: "Korzinkadan olib tashlangan vaqti",
  })
  finishedAt?: Date;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Mijoz IDsi",
    type: String,
  })
  customer_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Bilet holati IDsi",
    type: String,
  })
  status_id: mongoose.Schema.Types.ObjectId;
}
