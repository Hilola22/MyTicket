import { ApiProperty } from "@nestjs/swagger";

export class CreateTypeDto {
  @ApiProperty({
    example: "Konsert",
    description: "Tadbir turi"
  })
  name: string;
}
