import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { IRegisterSale } from "../../../../domain/interfaces/commands";

export class IRegisterSaleCommand implements IRegisterSale{
  @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID de la factura a registrar',
      })
    @IsUUID()
    Billid: string;
      @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del seller a registrar',
      })
    @IsUUID()
    
    Sellerid: string;
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID de la venta a registrar',
      })
    @IsUUID()
    IDSale: string;
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID de la order a registrar',
      })
     @IsUUID()
    IDOrder: string;
}
