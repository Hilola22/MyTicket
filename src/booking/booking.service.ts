import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Booking } from "./schema/booking.entity";
import { Model } from "mongoose";
import { Cart } from "../cart/schema/cart.schema";
import { PaymentMethod } from "../payment-method/schema/payment-method.schema";
import { DeliveryMethod } from "../delivery-method/schema/delivery-method.schema";
import { TicketStatus } from "../ticket-status/schema/ticket-status.schema";

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private readonly bookingSchema: Model<Booking>,
    @InjectModel(Cart.name) private readonly cartSchema: Model<Cart>,
    @InjectModel(PaymentMethod.name)
    private readonly paymentMethodSchema: Model<PaymentMethod>,
    @InjectModel(DeliveryMethod.name)
    private readonly deliveryMethodSchema: Model<DeliveryMethod>,
    @InjectModel(TicketStatus.name)
    private readonly ticketStatusSchema: Model<TicketStatus>
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const cart = await this.cartSchema.findById(createBookingDto.cart_id);
    if (!cart) throw new NotFoundException("Cart topilmadi");

    const paymentMethod = await this.paymentMethodSchema.findById(
      createBookingDto.payment_method_id
    );
    if (!paymentMethod) throw new NotFoundException("To'lov usuli topilmadi");

    const deliveryMethod = await this.deliveryMethodSchema.findById(
      createBookingDto.delivery_method_id
    );
    if (!deliveryMethod)
      throw new NotFoundException("Yetkazib berish usuli topilmadi");

    const status = await this.ticketStatusSchema.findById(
      createBookingDto.status_id
    );
    if (!status) throw new NotFoundException("Status topilmadi");
    return this.bookingSchema.create(createBookingDto);
  }

  findAll() {
    return this.bookingSchema
      .find()
      .populate("cart_id")
      .populate("payment_method_id")
      .populate("delivery_method_id")
      .populate("status_id");
  }

  findOne(id: string) {
    return this.bookingSchema
      .findById(id)
      .populate("cart_id")
      .populate("payment_method_id")
      .populate("delivery_method_id")
      .populate("status_id");
  }

  update(id: string, updateBookingDto: UpdateBookingDto) {
    return this.bookingSchema
      .findByIdAndUpdate(id, updateBookingDto, { new: true })
      .populate("cart_id")
      .populate("payment_method_id")
      .populate("delivery_method_id")
      .populate("status_id");
  }

  remove(id: string) {
    return this.bookingSchema.findByIdAndDelete(id);
  }
}
