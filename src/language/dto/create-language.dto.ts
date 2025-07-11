import { ApiProperty } from "@nestjs/swagger";

export class CreateLanguageDto {
  @ApiProperty({
    example: "O'zbek",
    description: "Til, masalan o'zbek tili",
  })
  name: string;
}
