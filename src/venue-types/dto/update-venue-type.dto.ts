import { PartialType } from "@nestjs/swagger";
import { CreateVenueTypeDto } from "./create-venue-type.dto";

export class UpdateVenueTypeDto {
  readonly venueId?: string;
  readonly typeId?: string;
}
