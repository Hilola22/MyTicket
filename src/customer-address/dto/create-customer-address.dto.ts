import { ApiProperty } from "@nestjs/swagger";
import mongoose from "mongoose";

export class CreateCustomerAddressDto {
  @ApiProperty({ example: "Uy manzili", description: "Manzil nomi" })
  name: string;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Mijoz IDsi",
  })
  customer_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c86",
    description: "Region IDsi",
  })
  region_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c87",
    description: "District IDsi",
  })
  district_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ example: "Yunusobod ko'chasi", description: "Ko'cha nomi" })
  street: string;

  @ApiProperty({ example: "12A", description: "Uy raqami" })
  house: string;

  @ApiProperty({ example: 45, description: "Kvartira raqami" })
  flat: number;

  @ApiProperty({ example: true, description: "Lokatsiya mavjudligi" })
  location: boolean;

  @ApiProperty({ example: "100100", description: "Pochta indeksi" })
  post_index: string;

  @ApiProperty({
    example: "Qo'shimcha ma'lumot",
    description: "Qo'shimcha info",
  })
  info: string;
}
