import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Event } from "./schema/event.schema";

@ApiTags("Tadbirlar")
@Controller("event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: "Yangi tadbir qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi tadbir qo'shildi!",
    type: Event,
  })
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @ApiOperation({ summary: "Barcha tadbirlarni olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha tadbirlar ro'yxati",
    type: [Event],
  })
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: "Tadbirni Id orqali olish" })
  @ApiResponse({ status: 200, description: "Tadbir ma'lumotlari", type: Event })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(id);
  }

  @ApiOperation({ summary: "Tadbirni Id orqali yangilash" })
  @ApiResponse({ status: 200, description: "Tadbir yangilandi!", type: Event })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(id, updateEventDto);
  }

  @ApiOperation({ summary: "Tadbirni Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Tadbir o'chirildi!" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(id);
  }
}
