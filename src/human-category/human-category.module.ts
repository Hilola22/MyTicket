import { Module } from "@nestjs/common";
import { HumanCategoryService } from "./human-category.service";
import { HumanCategoryController } from "./human-category.controller";
import { MongooseModule } from "@nestjs/mongoose";
import {
  HumanCategory,
  HumanCategorySchema,
} from "./schema/human-category.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: HumanCategory.name, schema: HumanCategorySchema },
    ]),
  ],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
  exports: [HumanCategoryService],
})
export class HumanCategoryModule {}
