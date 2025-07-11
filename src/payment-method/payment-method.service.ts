import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  PaymentMethod,
  PaymentMethodDocument,
} from "./schema/payment-method.schema";
import { CreatePaymentMethodDto } from "./dto/create-payment-method.dto";
import { UpdatePaymentMethodDto } from "./dto/update-payment-method.dto";

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod.name)
    private readonly paymentMethodModel: Model<PaymentMethodDocument>
  ) {}

  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodModel.create(createPaymentMethodDto);
  }

  findAll() {
    return this.paymentMethodModel.find();
  }

  findOne(id: string) {
    return this.paymentMethodModel.findById(id);
  }

  update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodModel.findByIdAndUpdate(
      id,
      updatePaymentMethodDto,
      { new: true }
    );
  }

  remove(id: string) {
    return this.paymentMethodModel.findByIdAndDelete(id);
  }
}
