import { ApiProperty } from "@nestjs/swagger";
import { Gender } from "../schema/human-category.schema";

export class CreateHumanCategoryDto {
  @ApiProperty({
    example: "Bolalar",
    description: "Kategoriya nomi (masalan: Bolalar, Kattalar)",
  })
  name: string;

  @ApiProperty({
    example: 0,
    description: "Boshlang‘ich yosh",
  })
  start_age: number;

  @ApiProperty({
    example: 12,
    description: "Tugash yoshi",
  })
  finish_age: number;

  @ApiProperty({
    enum: Gender,
    example: Gender.FEMALE,
    description: "Jinsi: female yoki male",
  })
  gender: Gender;
}
