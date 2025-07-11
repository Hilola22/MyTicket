import { ApiProperty } from "@nestjs/swagger";
import { PaymentMethodEnum } from "../schema/payment-method.schema";

export class CreatePaymentMethodDto {
  @ApiProperty({
    enum: PaymentMethodEnum,
    example: PaymentMethodEnum.CASH,
    description: "To'lov usuli: CASH, CARD, CLICK, PAYME va boshqalar",
  })
  name: PaymentMethodEnum;
}
