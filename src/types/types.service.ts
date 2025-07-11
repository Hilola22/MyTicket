import { Injectable } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Types } from "./schema/type.schema";
import { Model } from "mongoose";

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Types.name) private readonly typesSchema: Model<Types>
  ) {}
  create(createTypeDto: CreateTypeDto) {
    return this.typesSchema.create(createTypeDto);
  }

  findAll() {
    return this.typesSchema.find();
  }

  findOne(id: string) {
    return this.typesSchema.findById(id);
  }

  update(id: string, updateTypeDto: UpdateTypeDto) {
    return this.typesSchema.findByIdAndUpdate(id, updateTypeDto, { new: true });
  }

  remove(id: string) {
    return this.typesSchema.findByIdAndDelete(id);
  }
}
