import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { EventTypeService } from "./event-type.service";
import { CreateEventTypeDto } from "./dto/create-event-type.dto";
import { UpdateEventTypeDto } from "./dto/update-event-type.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { EventType } from "./schema/event-type.entity";

@ApiTags("Tadbir turlari")
@Controller("event-type")
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({ summary: "Yangi tadbir turini qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi tadbir turi qo'shildi!",
    type: EventType,
  })
  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({ summary: "Barcha tadbir turlarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha tadbir turlari ro'yxati",
    type: [EventType],
  })
  @Get()
  findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({ summary: "Tadbir turini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Tadbir turi ma'lumotlari",
    type: EventType,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventTypeService.findOne(id);
  }

  @ApiOperation({ summary: "Tadbir turini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Tadbir turi yangilandi!",
    type: EventType,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(id, updateEventTypeDto);
  }

  @ApiOperation({ summary: "Tadbir turini Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Tadbir turi o'chirildi!" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventTypeService.remove(id);
  }
}
