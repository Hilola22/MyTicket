import mongoose from "mongoose";

export class CreateBookingDto {
  cart_id: mongoose.Schema.Types.ObjectId;
  payment_method_id: mongoose.Schema.Types.ObjectId;
  delivery_method_id: mongoose.Schema.Types.ObjectId;
  status_id: mongoose.Schema.Types.ObjectId;
  discount_coupon_id: number;
}
