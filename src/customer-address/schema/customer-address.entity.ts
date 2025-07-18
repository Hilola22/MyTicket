import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Customer } from "../../customer/schema/customer.schema";
import { District } from "../../districts/schema/district.schema";
import { Region } from "../../region/schema/region.schema";
import { ApiProperty } from "@nestjs/swagger";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema({ versionKey: false, timestamps: false })
export class CustomerAddress {
  @ApiProperty({ example: "Uy manzili", description: "Manzil nomi" })
  @Prop({ required: true })
  name: string;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c85",
    description: "Mijoz IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  })
  customer_id: Customer;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c86",
    description: "Region IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region",
  })
  region_id: Region;

  @ApiProperty({
    example: "60d21b4667d0d8992e610c87",
    description: "District IDsi",
    type: String,
  })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "District",
  })
  district_id: District;

  @ApiProperty({ example: "Yunusobod ko'chasi", description: "Ko'cha nomi" })
  @Prop()
  street: string;

  @ApiProperty({ example: "12A", description: "Uy raqami" })
  @Prop()
  house: string;

  @ApiProperty({ example: 45, description: "Kvartira raqami" })
  @Prop()
  flat: number;

  @ApiProperty({ example: true, description: "Lokatsiya mavjudligi" })
  @Prop({ default: true })
  location: boolean;

  @ApiProperty({ example: "100100", description: "Pochta indeksi" })
  @Prop()
  post_index: string;

  @ApiProperty({
    example: "Qo'shimcha ma'lumot",
    description: "Qo'shimcha info",
  })
  @Prop()
  info: string;
}

export const CustomerAddresschema = SchemaFactory.createForClass(CustomerAddress);
