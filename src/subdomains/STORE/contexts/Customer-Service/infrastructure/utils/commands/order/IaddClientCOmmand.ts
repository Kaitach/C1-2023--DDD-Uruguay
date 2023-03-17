import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID, IsNumber } from "class-validator";
import { IAddClient } from "../../../../domain/interfaces/commands/Order-commands";

export class IaddClientCOmmand implements IAddClient {
      @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del cliente  a registrar',
      })
    @IsUUID()
    ClientID?: string;
      @ApiProperty({
        example: 'Matias',
        description: 'El nombre del cliente a registrar',
      })
    @IsString()
    Name?: string;
      @ApiProperty({
        example: 22925989,
        description: 'El telefono del cliente a registrar',
      })
    @IsNumber()
    Phone?: number;
}
