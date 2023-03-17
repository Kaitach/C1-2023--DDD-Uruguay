import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { IAddSaller } from "../../../../domain/interfaces/commands";

export class IAddsallerCommand implements IAddSaller {
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del vendedor a agregar',
      })
    @IsUUID()
    IdSeller: string;
    @ApiProperty({
        example: 'Franco',
        description: 'El nombre del vendedor a registrar',
      })
    @IsString()
    Name: string;
}
