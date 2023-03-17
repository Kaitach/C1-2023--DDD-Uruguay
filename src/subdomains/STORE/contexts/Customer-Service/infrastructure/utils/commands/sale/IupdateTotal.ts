import { IUpdateTotal } from "../../../../domain/interfaces/commands";
import {  IsUUID, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class IupdateTotalcommand  implements IUpdateTotal{
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID de la factura a actualizar',
      })
    @IsUUID()
    idBill: string;
    @ApiProperty({
        example: 34,
        description: 'El monto de la factura a actualizar',
      })
    @IsNumber()
    total: number;
}
