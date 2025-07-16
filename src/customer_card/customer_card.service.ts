import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateCustomerCardDto } from "./dto/create-customer_card.dto";
import { UpdateCustomerCardDto } from "./dto/update-customer_card.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CustomerCard } from "./schema/customer_card.schema";
import { isValidObjectId, Model } from "mongoose";
import { Customer } from "../customer/schema/customer.schema";

@Injectable()
export class CustomerCardService {
  constructor(
    @InjectModel(CustomerCard.name)
    private readonly customerCardSchema: Model<CustomerCard>,
    @InjectModel(Customer.name) private readonly customerSchema: Model<Customer>
  ) {}
  async create(createCustomerCardDto: CreateCustomerCardDto) {
    const { customer_id } = createCustomerCardDto;
    if (!isValidObjectId(customer_id)) {
      throw new BadRequestException("Customer ID noto'g'ri!");
    }
    const customer = await this.customerSchema.findById(customer_id);
    if (!customer) {
      throw new BadRequestException("Bunday customer mavjud emas!");
    }
    const customerCard = await this.customerCardSchema.create(
      createCustomerCardDto
    );

    return customerCard;
  }

  findAll() {
    return this.customerCardSchema.find().populate("customer_id");
  }

  findOne(id: string) {
    return this.customerCardSchema.findById(id);
  }

  update(id: string, updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardSchema.findByIdAndUpdate(
      id,
      updateCustomerCardDto,
      { new: true }
    );
  }

  remove(id: string) {
    return this.customerCardSchema.findByIdAndDelete(id);
  }
}
