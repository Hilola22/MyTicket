import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatTypeDto {
  @ApiProperty({
    example: "VIP",
    description: "O'rindiq turi nomi, masalan: VIP, Oddiy, Balkon va h.k.",
  })
  name: string;
}
