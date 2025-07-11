import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketStatusDto {
    @ApiProperty({
        example: "bought",
        description: "Bilet holati"
    })
    name: string
}
