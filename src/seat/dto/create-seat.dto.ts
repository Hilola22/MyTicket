import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class CreateSeatDto {
  @ApiProperty({ example: 1, description: "Sektor raqami" })
  scetor: number;

  @ApiProperty({ example: 5, description: "Qator raqami" })
  row_number: number;

  @ApiProperty({ example: 12, description: "O'rindiq raqami" })
  number: number;

  @ApiProperty({ example: "A-5-12", description: "Joylashuv (sxemadagi)" })
  location_in_schema: string;

  @ApiProperty({ example: "60d21b4667d0d8992e610c99", description: "Venue IDsi" })
  venue_id: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ example: "60d21b4667d0d8992e610c88", description: "SeatType IDsi" })
  seat_type_id: mongoose.Schema.Types.ObjectId;
}
