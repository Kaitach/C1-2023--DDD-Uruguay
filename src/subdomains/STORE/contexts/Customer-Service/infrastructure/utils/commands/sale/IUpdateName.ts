import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { IUpdateNameSeller } from "../../../../domain/interfaces/commands";

export class IUpdateNameSellerName implements IUpdateNameSeller {
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del vendedor a actualizar',
      })
    @IsUUID()
    idseller: string;
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El nombre del vendedor a actualizar',
      })
    Name: string;
}
