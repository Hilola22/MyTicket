import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {
  HumanCategory,
  HumanCategoryDocument,
} from "./schema/human-category.schema";
import { CreateHumanCategoryDto } from "./dto/create-human-category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human-category.dto";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory.name)
    private readonly humanCategoryModel: Model<HumanCategoryDocument>
  ) {}

  create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryModel.create(createHumanCategoryDto);
  }

  findAll() {
    return this.humanCategoryModel.find();
  }

  findOne(id: string) {
    return this.humanCategoryModel.findById(id);
  }

  update(id: string, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryModel.findByIdAndUpdate(
      id,
      updateHumanCategoryDto,
      { new: true }
    );
  }

  remove(id: string) {
    return this.humanCategoryModel.findByIdAndDelete(id);
  }
}
