import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
  @ApiProperty({
    example: "Toshkent",
    description: "Viloyat nomi",
  })
  name: string;
}
