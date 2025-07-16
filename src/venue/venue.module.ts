import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Venue, VenueSchema } from "./schema/venue.schema";
import { Region, RegionSchema } from "../region/schema/region.schema";
import { District, DistrictSchema } from "../districts/schema/district.schema";
import {
  VenuePhoto,
  VenuePhotoSchema,
} from "../venue-photo/schema/venue-photo.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Venue.name,
        schema: VenueSchema,
      },
      {
        name: Region.name,
        schema: RegionSchema,
      },
      {
        name: District.name,
        schema: DistrictSchema,
      },
      {
        name: VenuePhoto.name,
        schema: VenuePhotoSchema,
      },
    ]),
  ],
  controllers: [VenueController],
  providers: [VenueService],
  exports: [VenueService, MongooseModule],
})
export class VenueModule {}
