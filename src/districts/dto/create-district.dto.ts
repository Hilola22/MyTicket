import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";

export class CreateDistrictDto {
  @ApiProperty({ example: "Yunusobod", description: "Tuman nomi" })
  name: string;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c86",
    description: "Region IDsi",
  })
  region_id: mongoose.Schema.Types.ObjectId;
}
