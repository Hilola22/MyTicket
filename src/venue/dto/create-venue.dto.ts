import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueDto {
  @ApiProperty({ example: "Humo Arena", description: "Joy nomi" })
  name: string;

  @ApiProperty({
    example: "Toshkent shahri, Chilonzor tumani, Bunyodkor kochasi, 1-uy",
    description: "Joy manzili",
  })
  address: string;

  @ApiProperty({
    example: "41.2995, 69.2401",
    description: "Joy koordinatalari (latitude, longitude)",
  })
  location: string;

  @ApiProperty({
    example: "https://humoarena.uz",
    description: "Joyning rasmiy sayti",
  })
  site: string;

  @ApiProperty({ example: "A1", description: "Joy sxemasi yoki sxema kodi" })
  schema: string;

  @ApiProperty({
    example: "60f7c0b8b4d1c8001c8e4b1a",
    description: "Region IDsi",
  })
  regionId: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    example: "60f7c0b8b4d1c8001c8e4b1b",
    description: "District IDsi",
  })
  districtId: mongoose.Schema.Types.ObjectId;
}
