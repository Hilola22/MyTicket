import { Module } from "@nestjs/common";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Event, EventSchema } from "./schema/event.schema";
import { Venue, VenueSchema } from "../venue/schema/venue.schema";
import { HumanCategory, HumanCategorySchema } from "../human-category/schema/human-category.schema";
import { Language, LanguageSchema } from "../language/schema/language.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
      },
      {
        name: Venue.name,
        schema: VenueSchema,
      },
      {
        name: HumanCategory.name,
        schema: HumanCategorySchema,
      },
      {
        name: Language.name,
        schema: LanguageSchema
      }
    ]),
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
