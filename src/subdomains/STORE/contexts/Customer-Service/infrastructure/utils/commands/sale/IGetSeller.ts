import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { IGetSellerData } from "../../../../domain/interfaces/commands";

export class IGetSeller implements IGetSellerData {
  @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del vendedor  a buscar',
      })
    @IsUUID()
    SellerId: string;
}
