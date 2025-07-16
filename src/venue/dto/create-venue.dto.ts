import mongoose from "mongoose";

export class CreateVenueDto {
  name: string;
  address: string;
  location: string;
  site: string;
  schema: string;
  regionId: mongoose.Schema.Types.ObjectId;
  districtId: mongoose.Schema.Types.ObjectId;
}
