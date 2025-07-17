import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class CreateVenuePhotoDto {
  @ApiProperty({
    example: "https://example.com/photo.jpg",
    description: "Joy rasmi URL manzili",
  })
  url: string;

  @ApiProperty({ example: "60f7c0b8b4d1c8001c8e4b1a", description: "Joy IDsi" })
  venueId: mongoose.Schema.Types.ObjectId;
}
