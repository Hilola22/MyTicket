import { Injectable, BadRequestException } from "@nestjs/common";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Seat, SeatDocument } from "./schema/seat.schema";
import { Model, isValidObjectId } from "mongoose";
import { Venue, VenueDocument } from "../venue/schema/venue.schema";
import {
  SeatType,
  SeatTypeDocument,
} from "../seat-type/schema/seat-type.schema";

@Injectable()
export class SeatService {
  constructor(
    @InjectModel(Seat.name) private readonly seatSchema: Model<SeatDocument>,
    @InjectModel(Venue.name) private readonly venueSchema: Model<VenueDocument>,
    @InjectModel(SeatType.name)
    private readonly seatTypeSchema: Model<SeatTypeDocument>
  ) {}

  async create(createSeatDto: CreateSeatDto) {
    const { venue_id, seat_type_id } = createSeatDto;
    if (!isValidObjectId(venue_id))
      throw new BadRequestException("Venue ID noto'gri!");
    if (!isValidObjectId(seat_type_id))
      throw new BadRequestException("SeatType ID noto'gri!");
    const venue = await this.venueSchema.findById(venue_id);
    if (!venue) throw new BadRequestException("Bunday venue mavjud emas!");
    const seatType = await this.seatTypeSchema.findById(seat_type_id);
    if (!seatType)
      throw new BadRequestException("Bunday seat type mavjud emas!");
    const seat = await this.seatSchema.create(createSeatDto);
    await seat.save();
    return seat;
  }

  async findAll() {
    return this.seatSchema.find().populate("venue_id seat_type_id");
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException("ID noto'gri!");
    const seat = await this.seatSchema
      .findById(id)
      .populate("venue_id seat_type_id");
    if (!seat) throw new BadRequestException("Bunday seat topilmadi!");
    return seat;
  }

  async update(id: string, updateSeatDto: UpdateSeatDto) {
    if (!isValidObjectId(id)) throw new BadRequestException("ID noto'gri!");
    const seat = await this.seatSchema
      .findByIdAndUpdate(id, updateSeatDto, { new: true })
      .populate("venue_id seat_type_id");
    if (!seat) throw new BadRequestException("Bunday seat topilmadi!");
    return seat;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException("ID noto'gri!");
    const seat = await this.seatSchema.findByIdAndDelete(id);
    if (!seat) throw new BadRequestException("Bunday seat topilmadi!");
    return seat;
  }
}
