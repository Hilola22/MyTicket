import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { TypesModule } from './types/types.module';
import { RegionModule } from './region/region.module';
import { LanguageModule } from './language/language.module';
import { TicketStatusModule } from './ticket-status/ticket-status.module';
import { SeatTypeModule } from './seat-type/seat-type.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { DeliveryMethodModule } from './delivery-method/delivery-method.module';
import { HumanCategoryModule } from './human-category/human-category.module';
import { CustomerModule } from './customer/customer.module';
import { DistrictsModule } from './districts/districts.module';
import { VenueModule } from './venue/venue.module';
import { VenuePhotoModule } from './venue-photo/venue-photo.module';
import { VenueTypesModule } from './venue-types/venue-types.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { CustomerAddressModule } from './customer-address/customer-address.module';
import { SeatModule } from './seat/seat.module';
import { EventModule } from './event/event.module';
import { EventTypeModule } from './event-type/event-type.module';
import { TicketModule } from './ticket/ticket.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { CartModule } from './cart/cart.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AdminModule,
    AuthModule,
    TypesModule,
    RegionModule,
    LanguageModule,
    TicketStatusModule,
    SeatTypeModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    HumanCategoryModule,
    CustomerModule,
    DistrictsModule,
    VenueModule,
    VenuePhotoModule,
    VenueTypesModule,
    CustomerCardModule,
    CustomerAddressModule,
    SeatModule,
    EventModule,
    EventTypeModule,
    TicketModule,
    CartItemModule,
    CartModule,
    BookingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
