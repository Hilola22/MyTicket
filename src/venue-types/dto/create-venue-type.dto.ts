import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueTypeDto {
  @ApiProperty({ example: "60f7c0b8b4d1c8001c8e4b1a", description: "Joy IDsi" })
  readonly venueId: string;

  @ApiProperty({
    example: "60f7c0b8b4d1c8001c8e4b1c",
    description: "Type IDsi",
  })
  readonly typeId: string;
}
