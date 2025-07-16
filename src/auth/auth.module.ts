import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";
import { CustomerModule } from "../customer/customer.module";

@Module({
  imports: [JwtModule.register({}), AdminModule, CustomerModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
