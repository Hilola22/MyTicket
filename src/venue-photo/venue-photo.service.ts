import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue-photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue-photo.dto";
import { InjectModel } from "@nestjs/mongoose";
import { VenuePhoto } from "./schema/venue-photo.schema";
import { isValidObjectId, Model } from "mongoose";
import { Venue } from "../venue/schema/venue.schema";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto.name)
    private readonly venuePhotoSchema: Model<VenuePhoto>,
    @InjectModel(Venue.name) private readonly venueSchema: Model<Venue>
  ) {}
  async create(createVenuePhotoDto: CreateVenuePhotoDto) {
    const { venueId } = createVenuePhotoDto;
    if (!isValidObjectId(venueId)) {
      throw new BadRequestException("Venue ID noto'g'ri");
    }
    const venue = await this.venueSchema.findById(venueId);
    if (!venue) {
      throw new BadRequestException("Bunday venue mavjud emas!");
    }
    const venuePhoto = await this.venuePhotoSchema.create(createVenuePhotoDto);

    await this.venueSchema.findByIdAndUpdate(venueId, {
      $push: { photos: venuePhoto._id },
    });

    return venuePhoto;
  }

  findAll() {
    return this.venuePhotoSchema.find().populate("venueId");
  }

  findOne(id: string) {
    return this.venuePhotoSchema.findById(id);
  }

  update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoSchema.findByIdAndUpdate(id, updateVenuePhotoDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.venuePhotoSchema.findByIdAndDelete(id);
  }
}
