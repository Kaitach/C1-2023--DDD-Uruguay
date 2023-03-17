import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { IGetSalesList } from "../../../../domain/interfaces/commands";

export class IGetSales  implements IGetSalesList{
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID de la venta a buscar',
      })
    @IsUUID()
    IdSale: string;
}
