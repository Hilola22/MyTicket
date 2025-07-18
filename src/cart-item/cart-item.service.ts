import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCartItemDto } from "./dto/create-cart-item.dto";
import { UpdateCartItemDto } from "./dto/update-cart-item.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CartItem } from "./schema/cart-item.schema";
import { Model, isValidObjectId } from "mongoose";
import { Cart } from "../cart/schema/cart.schema";
import { Ticket } from "../ticket/schema/ticket.schema";

@Injectable()
export class CartItemService {
  constructor(
    @InjectModel(CartItem.name)
    private readonly cartItemSchema: Model<CartItem>,
    @InjectModel(Cart.name) private readonly cartSchema: Model<Cart>,
    @InjectModel(Ticket.name) private readonly ticketSchema: Model<Ticket>
  ) {}

  async create(createCartItemDto: CreateCartItemDto) {
    const cartItem = await this.cartItemSchema.create(createCartItemDto);
    return cartItem;
  }

  async findAll() {
    return this.cartItemSchema.find().populate("cart_id").populate("ticket_id");
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new NotFoundException("ID noto'g'ri!");
    const cartItem = await this.cartItemSchema
      .findById(id)
      .populate("cart_id")
      .populate("ticket_id");
    if (!cartItem) throw new NotFoundException("CartItem topilmadi!");
    return cartItem;
  }

  async update(id: string, updateCartItemDto: UpdateCartItemDto) {
    if (!isValidObjectId(id)) throw new NotFoundException("ID noto'g'ri!");
    const updated = await this.cartItemSchema.findByIdAndUpdate(
      id,
      updateCartItemDto,
      { new: true }
    );
    if (!updated) throw new NotFoundException("CartItem topilmadi!");
    return updated;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new NotFoundException("ID noto'g'ri!");
    const deleted = await this.cartItemSchema.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException("CartItem topilmadi!");
    return deleted;
  }
}
