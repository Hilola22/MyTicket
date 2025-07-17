import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerCardDto {
  @ApiProperty({
    example: "60f7c0b8b4d1c8001c8e4b1a",
    description: "Mijoz IDsi",
  })
  customer_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ example: "Ali Valiyev", description: "Karta egasi ismi" })
  name: string;

  @ApiProperty({ example: "+998901234567", description: "Telefon raqami" })
  phone: string;

  @ApiProperty({ example: "8600123456789012", description: "Karta raqami" })
  number: string;

  @ApiProperty({ example: "2026", description: "Karta yili (YYYY)" })
  year: string;

  @ApiProperty({ example: "12", description: "Karta oyi (MM)" })
  month: string;
}
