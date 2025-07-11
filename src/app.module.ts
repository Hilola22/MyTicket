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
    CustomerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
