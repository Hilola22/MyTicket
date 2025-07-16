import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { Customer, CustomerDocument } from "./schema/customer.schema";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import * as bcrypt from "bcrypt";
import { Language, LanguageDocument } from "../language/schema/language.schema";

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name)
    private readonly customerSchema: Model<CustomerDocument>,
    @InjectModel(Language.name)
    private readonly languageSchema: Model<LanguageDocument>
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const { language_id, password, confirm_password } = createCustomerDto;
    if (!isValidObjectId(language_id)) {
      throw new BadRequestException("Language ID noto'g'ri!");
    }
    const language = await this.languageSchema.findById(language_id);
    if (!language) {
      throw new BadRequestException("Bunday til mavjud emas!");
    }
    if (password !== confirm_password) {
      throw new BadRequestException("Passwords not match");
    }
    const hashed_password = await bcrypt.hash(password, 7);
    const customer = await this.customerSchema.create({
      ...createCustomerDto,
      hashed_password,
    });
    await customer.save();
    return customer;
  }

  findAll() {
    return this.customerSchema.find();
  }

  async updateRefreshToken(id: string, refreshToken: string) {
    const updatedUser = await this.customerSchema.findByIdAndUpdate(
      id,
      { hashed_refresh_token: refreshToken },
      { new: true }
    );
    return updatedUser;
  }

  findOne(id: string) {
    return this.customerSchema.findById(id);
  }

  findByEmail(email: string) {
    return this.customerSchema.findOne({ email });
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerSchema.findByIdAndUpdate(id, updateCustomerDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.customerSchema.findByIdAndDelete(id);
  }
}