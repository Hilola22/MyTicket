import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  DeliveryMethod,
  DeliveryMethodDocument,
} from "./schema/delivery-method.schema";
import { CreateDeliveryMethodDto } from "./dto/create-delivery-method.dto";
import { UpdateDeliveryMethodDto } from "./dto/update-delivery-method.dto";

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod.name)
    private readonly deliveryMethodModel: Model<DeliveryMethodDocument>
  ) {}

  create(createDeliveryMethodDto: CreateDeliveryMethodDto) {
    return this.deliveryMethodModel.create(createDeliveryMethodDto);
  }

  findAll() {
    return this.deliveryMethodModel.find();
  }

  findOne(id: string) {
    return this.deliveryMethodModel.findById(id);
  }

  update(id: string, updateDeliveryMethodDto: UpdateDeliveryMethodDto) {
    return this.deliveryMethodModel.findByIdAndUpdate(
      id,
      updateDeliveryMethodDto,
      { new: true }
    );
  }

  remove(id: string) {
    return this.deliveryMethodModel.findByIdAndDelete(id);
  }
}
