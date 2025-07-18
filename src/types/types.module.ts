import { Module } from "@nestjs/common";
import { TypesService } from "./types.service";
import { TypesController } from "./types.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Types, TypesSchema } from "./schema/type.schema";
import { Venue, VenueSchema } from "../venue/schema/venue.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Types.name,
        schema: TypesSchema,
      },
      {
        name: Venue.name,
        schema: VenueSchema,
      },
    ]),
  ],
  controllers: [TypesController],
  providers: [TypesService],
  exports: [TypesService, MongooseModule],
})
export class TypesModule {}
