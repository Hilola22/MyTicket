import mongoose from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {
  @ApiProperty({ example: "Yoshlar Festivali", description: "Tadbir nomi" })
  name: string;

  @ApiProperty({
    example: "https://example.com/photo.jpg",
    description: "Tadbir rasmi URL manzili",
  })
  photo: string;

  @ApiProperty({
    example: "2024-07-01",
    description: "Tadbir boshlanish sanasi",
  })
  start_date: Date;

  @ApiProperty({ example: "18:00", description: "Tadbir boshlanish vaqti" })
  start_time: string;

  @ApiProperty({ example: "2024-07-01", description: "Tadbir tugash sanasi" })
  finish_date: Date;

  @ApiProperty({ example: "21:00", description: "Tadbir tugash vaqti" })
  finish_time: string;

  @ApiProperty({
    example: "Bu festival yoshlar uchun.",
    description: "Tadbir haqida qisqacha ma’lumot",
  })
  info: string;

  @ApiProperty({
    example: "60f7c0b8b4d1c8001c8e4b1c",
    description: "Tadbir turi IDsi",
  })
  event_type_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    example: "60f7c0b8b4d1c8001c8e4b1d",
    description: "Inson kategoriyasi IDsi",
  })
  human_category_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ example: "60f7c0b8b4d1c8001c8e4b1e", description: "Til IDsi" })
  lang_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({
    example: "2024-06-01",
    description: "Chiptalar sotuvi boshlanish sanasi",
  })
  release_date: Date;
}
