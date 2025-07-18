import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Customer, CustomerSchema } from "./schema/customer.schema";
import { Language, LanguageSchema } from "../language/schema/language.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Customer.name,
        schema: CustomerSchema,
      },
      {
        name: Language.name,
        schema: LanguageSchema,
      },
    ]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
