import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { InjectModel } from "@nestjs/mongoose";
import { District, DistrictDocument } from "./schema/district.schema";
import { isValidObjectId, Model } from "mongoose";
import { Region, RegionDocument } from "../region/schema/region.schema";

@Injectable()
export class DistrictsService {
  constructor(
    @InjectModel(District.name)
    private readonly districtSchema: Model<DistrictDocument>,
    @InjectModel(Region.name)
    private readonly regionSchema: Model<RegionDocument>
  ) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const { region_id } = createDistrictDto;
    if (!isValidObjectId(region_id)) {
      throw new BadRequestException("Region ID noto'g'ri!");
    }
    const region = await this.regionSchema.findById(region_id); //tashqi kalit
    if (!region) {
      throw new BadRequestException("Bunday region yo'q");
    }
    const district = await this.districtSchema.create(createDistrictDto);
    region.districts.push(district);
    await region.save();
    return district;
  }

  async findAll() {
    return this.districtSchema.find().populate("region_id");
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException("ID noto'g'ri!");
    const district = await this.districtSchema
      .findById(id)
      .populate("region_id");
    if (!district) throw new BadRequestException("Bunday tuman topilmadi!");
    return district;
  }

  async update(id: string, updateDistrictDto: UpdateDistrictDto) {
    if (!isValidObjectId(id)) throw new BadRequestException("ID noto'g'ri!");
    const district = await this.districtSchema
      .findByIdAndUpdate(id, updateDistrictDto, { new: true })
      .populate("region_id");
    if (!district) throw new BadRequestException("Bunday tuman topilmadi!");
    return district;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException("ID noto'g'ri!");
    const district = await this.districtSchema.findByIdAndDelete(id);
    if (!district) throw new BadRequestException("Bunday tuman topilmadi!");
    return district;
  }
}
