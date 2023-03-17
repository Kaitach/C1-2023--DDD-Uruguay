import { IGetClient } from "../../../../domain/interfaces/commands";
import { IsUUID } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class IGetClientCommand implements IGetClient  {
  @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del cliente a buscar',
      })
    @IsUUID()
    ClientID: string;
}