import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { VenueTypes, VenueTypesSchema } from "./schema/venue-type.schema";
import { VenueTypesService } from "./venue-types.service";
import { VenueTypesController } from "./venue-types.controller";
import { Venue, VenueSchema } from "../venue/schema/venue.schema";
import { Types, TypesSchema } from "../types/schema/type.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VenueTypes.name, schema: VenueTypesSchema },
      { name: Venue.name, schema: VenueSchema },
      { name: Types.name, schema: TypesSchema },
    ]),
  ],
  controllers: [VenueTypesController],
  providers: [VenueTypesService],
  exports: [VenueTypesService],
})
export class VenueTypesModule {}
