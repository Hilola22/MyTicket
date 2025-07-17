import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenueTypesService } from "./venue-types.service";
import { CreateVenueTypeDto } from "./dto/create-venue-type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue-type.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { VenueTypes } from "./schema/venue-type.schema";

@ApiTags("Joy turlari")
@Controller("venue-types")
export class VenueTypesController {
  constructor(private readonly venueTypesService: VenueTypesService) {}

  @ApiOperation({ summary: "Yangi joy turi qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi joy turi qo'shildi!",
    type: VenueTypes,
  })
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypesService.create(createVenueTypeDto);
  }

  @ApiOperation({ summary: "Barcha joy turlarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha joy turlari ro'yxati",
    type: [VenueTypes],
  })
  @Get()
  findAll() {
    return this.venueTypesService.findAll();
  }

  @ApiOperation({ summary: "Joy turini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Joy turi ma'lumotlari",
    type: VenueTypes,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venueTypesService.findOne(id);
  }

  @ApiOperation({ summary: "Joy turini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Joy turi yangilandi!",
    type: VenueTypes,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto
  ) {
    return this.venueTypesService.update(id, updateVenueTypeDto);
  }

  @ApiOperation({ summary: "Joy turini Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Joy turi o'chirildi!" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venueTypesService.remove(id);
  }
}
