import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({ example: "Ali Valiyev", description: "Admin toliq ismi" })
  full_name: string;

  @ApiProperty({ example: "ali@mail.com", description: "Admin email manzili" })
  email: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Admin telefon raqami",
  })
  phone_number: string;

  @ApiProperty({ example: "Parol123!", description: "Admin paroli" })
  password: string;

  @ApiProperty({ example: "Parol123!", description: "Parolni tasdiqlash" })
  confirm_password: string;
}
