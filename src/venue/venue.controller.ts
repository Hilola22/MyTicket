import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenueService } from "./venue.service";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Venue } from "./schema/venue.schema";

@ApiTags("Joylar")
@Controller("venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({ summary: "Yangi joy qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi joy qo'shildi!",
    type: Venue,
  })
  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({ summary: "Barcha joylarni olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha joylar ro'yxati",
    type: [Venue],
  })
  @Get()
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation({ summary: "Joyni Id orqali olish" })
  @ApiResponse({ status: 200, description: "Joy ma'lumotlari", type: Venue })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venueService.findOne(id);
  }

  @ApiOperation({ summary: "Joyni Id orqali yangilash" })
  @ApiResponse({ status: 200, description: "Joy yangilandi!", type: Venue })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(id, updateVenueDto);
  }

  @ApiOperation({ summary: "Joyni Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Joy o'chirildi!" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venueService.remove(id);
  }
}
