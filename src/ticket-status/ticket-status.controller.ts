import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketStatusService } from './ticket-status.service';
import { CreateTicketStatusDto } from './dto/create-ticket-status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket-status.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TicketStatus } from './schema/ticket-status.schema';

@ApiTags("Bilet holati")
@Controller("ticket-status")
export class TicketStatusController {
  constructor(private readonly ticketStatusService: TicketStatusService) {}

  @ApiOperation({ summary: "Yangi bilet holatini qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi bilet holati qo'shildi!",
    type: TicketStatus,
  })
  @Post()
  create(@Body() createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusService.create(createTicketStatusDto);
  }

  @ApiOperation({ summary: "Barcha bilet holatlarini ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Barcha bilet holatlari: ",
    type: [TicketStatus],
  })
  @Get()
  findAll() {
    return this.ticketStatusService.findAll();
  }

  @ApiOperation({ summary: "Bilet holatini Id orqali ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Bilet holati: ",
    type: TicketStatus,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ticketStatusService.findOne(id);
  }

  @ApiOperation({ summary: "Bilet holatini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Bilet holati yangnilandi!",
    type: TicketStatus,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTicketStatusDto: UpdateTicketStatusDto
  ) {
    return this.ticketStatusService.update(id, updateTicketStatusDto);
  }

  @ApiOperation({ summary: "Bilet holatini Id orqali o'chirish" })
  @ApiResponse({
    status: 200,
    description: "Bilet holati o'chirildi!!",
    type: TicketStatus,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ticketStatusService.remove(id);
  }
}
