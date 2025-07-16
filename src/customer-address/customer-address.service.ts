import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, isValidObjectId } from "mongoose";
import {
  CustomerAddress,
  CustomerAddressDocument,
} from "./schema/customer-address.entity";
import { CreateCustomerAddressDto } from "./dto/create-customer-address.dto";
import { UpdateCustomerAddressDto } from "./dto/update-customer-address.dto";
import { Customer, CustomerDocument } from "../customer/schema/customer.schema";
import { Region, RegionDocument } from "../region/schema/region.schema";
import {
  District,
  DistrictDocument,
} from "../districts/schema/district.schema";

@Injectable()
export class CustomerAddressService {
  constructor(
    @InjectModel(CustomerAddress.name)
    private readonly customerAddressSchema: Model<CustomerAddressDocument>,
    @InjectModel(Customer.name)
    private readonly customerSchema: Model<CustomerDocument>,
    @InjectModel(Region.name)
    private readonly regionSchema: Model<RegionDocument>,
    @InjectModel(District.name)
    private readonly districtSchema: Model<DistrictDocument>
  ) {}

  async create(createCustomerAddressDto: CreateCustomerAddressDto) {
    const { customer_id, region_id, district_id } = createCustomerAddressDto;
    if (!isValidObjectId(customer_id))
      throw new BadRequestException("Customer ID noto'gri!");
    if (!isValidObjectId(region_id))
      throw new BadRequestException("Region ID noto'gri!");
    if (!isValidObjectId(district_id))
      throw new BadRequestException("District ID noto'gri!");
    const customer = await this.customerSchema.findById(customer_id);
    if (!customer) throw new BadRequestException("Bunday mijoz mavjud emas!");
    const region = await this.regionSchema.findById(region_id);
    if (!region) throw new BadRequestException("Bunday region mavjud emas!");
    const district = await this.districtSchema.findById(district_id);
    if (!district)
      throw new BadRequestException("Bunday district mavjud emas!");
    const address = await this.customerAddressSchema.create(
      createCustomerAddressDto
    );
    await address.save();
    return address;
  }

  async findAll() {
    return this.customerAddressSchema
      .find()
      .populate("customer_id region_id district_id");
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException("ID noto'gri!");
    const address = await this.customerAddressSchema
      .findById(id)
      .populate("customer_id region_id district_id");
    if (!address) throw new BadRequestException("Bunday manzil topilmadi!");
    return address;
  }

  async update(id: string, updateCustomerAddressDto: UpdateCustomerAddressDto) {
    if (!isValidObjectId(id)) throw new BadRequestException("ID noto'gri!");
    const address = await this.customerAddressSchema
      .findByIdAndUpdate(id, updateCustomerAddressDto, { new: true })
      .populate("customer_id region_id district_id");
    if (!address) throw new BadRequestException("Bunday manzil topilmadi!");
    return address;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new BadRequestException("ID noto'gri!");
    const address = await this.customerAddressSchema.findByIdAndDelete(id);
    if (!address) throw new BadRequestException("Bunday manzil topilmadi!");
    return address;
  }
}
