import { DeleteSale } from "../../../../domain/interfaces/commands";
import { IsUUID } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class IDeleteSale implements DeleteSale{
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID de la venta a eliminar',
      })
    @IsUUID()
    IDSale: string;
}
