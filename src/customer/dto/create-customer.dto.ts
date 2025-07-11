import { ApiProperty } from "@nestjs/swagger";
import { Gender } from "../../human-category/schema/human-category.schema";

export class CreateCustomerDto {
  @ApiProperty({ example: "Ali", description: "Ismi" })
  first_name: string;

  @ApiProperty({ example: "Valiyev", description: "Familiyasi" })
  last_name: string;

  @ApiProperty({ example: "+998901234567", description: "Telefon raqami" })
  phone: string;

  @ApiProperty({ example: "Parol123!", description: "Parol" })
  password: string;

  @ApiProperty({ example: "Parol123!", description: "Parolni tasdiqlash" })
  confirm_password: string;

  @ApiProperty({ example: "ali@mail.com", description: "Email manzili" })
  email: string;

  @ApiProperty({
    example: "2000-01-01",
    description: "Tug'ilgan sana",
    type: String,
  })
  birth_date: Date;

  @ApiProperty({
    enum: Gender,
    example: Gender.MALE,
    description: "Jinsi: male yoki female",
  })
  gender: Gender;
}
