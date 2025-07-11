import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Customer, CustomerDocument } from "./schema/customer.schema";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name)
    private readonly customerModel: Model<CustomerDocument>
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const { password, confirm_password } = createCustomerDto;
    if (password !== confirm_password) {
      throw new BadRequestException("Passwords not match");
    }
    const hashed_password = await bcrypt.hash(password, 7);
    return this.customerModel.create({ ...createCustomerDto, hashed_password });
  }

  findAll() {
    return this.customerModel.find();
  }

  findOne(id: string) {
    return this.customerModel.findById(id);
  }

  findByEmail(email: string) {
    return this.customerModel.findOne({ email });
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.customerModel.findByIdAndDelete(id);
  }
}
