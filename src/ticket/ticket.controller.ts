import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Ticket } from './schema/ticket.schema';

@ApiTags('Biletlar')
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({ summary: "Yangi bilet qo'shish" })
  @ApiResponse({ status: 201, description: "Yangi bilet qo'shildi!", type: Ticket })
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @ApiOperation({ summary: "Barcha biletlarni olish" })
  @ApiResponse({ status: 200, description: "Barcha biletlar ro'yxati", type: [Ticket] })
  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @ApiOperation({ summary: "Biletni Id orqali olish" })
  @ApiResponse({ status: 200, description: "Bilet ma'lumotlari", type: Ticket })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(id);
  }

  @ApiOperation({ summary: "Biletni Id orqali yangilash" })
  @ApiResponse({ status: 200, description: "Bilet yangilandi!", type: Ticket })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @ApiOperation({ summary: "Biletni Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Bilet o'chirildi!" })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(id);
  }
}
