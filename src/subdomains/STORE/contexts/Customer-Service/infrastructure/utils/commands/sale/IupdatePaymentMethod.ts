import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsUUID } from "class-validator";
import { UpdatePaymentMethod } from "../../../../domain/interfaces/commands";

export class IupdatePaymentMethod implements UpdatePaymentMethod {
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID de la factura a actualizar',
      })
    @IsUUID()
    idBill: string;
    @ApiProperty({
        example: 3,
        description: 'El Metodo de la factura a actualizar',
      })
    @IsNumber()
    paymentMethod: number;
}
