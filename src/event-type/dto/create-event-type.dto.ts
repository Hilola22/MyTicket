import mongoose from "mongoose";
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventTypeDto {
  @ApiProperty({ example: 'Konsert', description: 'Tadbir turi nomi' })
  name: string;

  @ApiProperty({ example: '60f7c0b8b4d1c8001c8e4b1c', description: 'Parent event type IDsi' })
  parent_event_type_id: mongoose.Schema.Types.ObjectId;
}
