import { ApiProperty } from "@nestjs/swagger";
import { DeliveryMethodEnum } from "../schema/delivery-method.schema";

export class CreateDeliveryMethodDto {
  @ApiProperty({
    enum: DeliveryMethodEnum,
    example: DeliveryMethodEnum.DELIVERY,
    description:
      "Yetkazib berish usuli: DELIVERY (yoki kuryer orqali), ONLINE (elektron) va boshqalar",
  })
  name: DeliveryMethodEnum;
}
