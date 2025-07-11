import { Injectable } from "@nestjs/common";
import { CreateLanguageDto } from "./dto/create-language.dto";
import { UpdateLanguageDto } from "./dto/update-language.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Language } from "./schema/language.schema";
import { Model } from "mongoose";

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language.name) private readonly languageSchema: Model<Language>
  ) {}

  create(createLanguageDto: CreateLanguageDto) {
    return this.languageSchema.create(createLanguageDto);
  }

  findAll() {
    return this.languageSchema.find();
  }

  findOne(id: string) {
    return this.languageSchema.findById(id);
  }

  update(id: string, updateLanguageDto: UpdateLanguageDto) {
    return this.languageSchema.findByIdAndUpdate(id, updateLanguageDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.languageSchema.findByIdAndDelete(id);
  }
}
