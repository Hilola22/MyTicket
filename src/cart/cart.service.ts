import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cart } from './schema/cart.schema';
import { Model, isValidObjectId } from 'mongoose';
import { Customer } from '../customer/schema/customer.schema';
import { TicketStatus } from '../ticket-status/schema/ticket-status.schema';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartSchema: Model<Cart>,
    @InjectModel(Customer.name) private readonly customerSchema: Model<Customer>,
    @InjectModel(TicketStatus.name) private readonly statusSchema: Model<TicketStatus>,
  ){}

  async create(createCartDto: CreateCartDto) {
    const cart = await this.cartSchema.create(createCartDto);
    return cart;
  }

  async findAll() {
    return this.cartSchema.find().populate('customer_id').populate('status_id');
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) throw new NotFoundException("ID noto'g'ri!");
    const cart = await this.cartSchema.findById(id).populate('customer_id').populate('status_id');
    if (!cart) throw new NotFoundException('Korzina topilmadi!');
    return cart;
  }

  async update(id: string, updateCartDto: UpdateCartDto) {
    if (!isValidObjectId(id)) throw new NotFoundException("ID noto'g'ri!");
    const updated = await this.cartSchema.findByIdAndUpdate(id, updateCartDto, { new: true });
    if (!updated) throw new NotFoundException('Korzina topilmadi!');
    return updated;
  }

  async remove(id: string) {
    if (!isValidObjectId(id)) throw new NotFoundException("ID noto'g'ri!");
    const deleted = await this.cartSchema.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Korzina topilmadi!');
    return deleted;
  }
}
