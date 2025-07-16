import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VenueTypes } from "./schema/venue-type.schema";
import { CreateVenueTypeDto } from "./dto/create-venue-type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue-type.dto";

@Injectable()
export class VenueTypesService {
  constructor(
    @InjectModel(VenueTypes.name)
    private readonly venueTypesModel: Model<VenueTypes>
  ) {}

  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypesModel.create(createVenueTypeDto);
  }

  findAll() {
    return this.venueTypesModel.find().populate("venueId").populate("typeId");
  }

  findOne(id: string) {
    return this.venueTypesModel
      .findById(id)
      .populate("venueId")
      .populate("typeId");
  }

  update(id: string, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypesModel.findByIdAndUpdate(id, updateVenueTypeDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.venueTypesModel.findByIdAndDelete(id);
  }
}
