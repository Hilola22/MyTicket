import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {
  CustomerAddress,
  CustomerAddresschema,
} from "./schema/customer-address.entity";
import { Customer, CustomerSchema } from "../customer/schema/customer.schema";
import { Region, RegionSchema } from "../region/schema/region.schema";
import { District, DistrictSchema } from "../districts/schema/district.schema";
import { CustomerAddressService } from "./customer-address.service";
import { CustomerAddressController } from "./customer-address.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CustomerAddress.name, schema: CustomerAddresschema },
      { name: Customer.name, schema: CustomerSchema },
      { name: Region.name, schema: RegionSchema },
      { name: District.name, schema: DistrictSchema },
    ]),
  ],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService],
})
export class CustomerAddressModule {}
