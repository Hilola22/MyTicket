import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenuePhotoService } from "./venue-photo.service";
import { CreateVenuePhotoDto } from "./dto/create-venue-photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue-photo.dto";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { VenuePhoto } from "./schema/venue-photo.schema";

@ApiTags("Joy rasmlari")
@Controller("venue-photo")
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @ApiOperation({ summary: "Yangi joy rasmi qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Yangi joy rasmi qo'shildi!",
    type: VenuePhoto,
  })
  @Post()
  create(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoService.create(createVenuePhotoDto);
  }

  @ApiOperation({ summary: "Barcha joy rasmlarini olish" })
  @ApiResponse({
    status: 200,
    description: "Barcha joy rasmlari ro'yxati",
    type: [VenuePhoto],
  })
  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @ApiOperation({ summary: "Joy rasmini Id orqali olish" })
  @ApiResponse({
    status: 200,
    description: "Joy rasmi ma'lumotlari",
    type: VenuePhoto,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venuePhotoService.findOne(id);
  }

  @ApiOperation({ summary: "Joy rasmini Id orqali yangilash" })
  @ApiResponse({
    status: 200,
    description: "Joy rasmi yangilandi!",
    type: VenuePhoto,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto
  ) {
    return this.venuePhotoService.update(id, updateVenuePhotoDto);
  }

  @ApiOperation({ summary: "Joy rasmini Id orqali o'chirish" })
  @ApiResponse({ status: 200, description: "Joy rasmi o'chirildi!" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venuePhotoService.remove(id);
  }
}
