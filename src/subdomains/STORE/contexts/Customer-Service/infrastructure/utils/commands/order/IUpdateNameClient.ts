import { UpdateNameClient } from '../../../../domain/interfaces/commands/Order-commands/Client-Command/update-name-command';
import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class IUpdateNameClient implements UpdateNameClient {
 @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del cliente a actualizar',
      })
    @IsUUID()
    ClientID: string;
      @ApiProperty({
        example: "Graciela",
        description: 'El nombre del cliente a actualizar',
      })
    @IsString()
    Name: string;
}
