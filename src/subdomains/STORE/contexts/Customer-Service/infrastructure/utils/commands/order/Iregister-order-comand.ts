import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { IRegisterOrder } from "../../../../domain/interfaces/commands/Order-commands/register.order-command";

export class IRegisterOrderCommand implements IRegisterOrder {
      @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del Cliente a registrar',
      })
    @IsUUID()

    clientID: string;
      @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del MangaID a registrar',
      })

    @IsUUID()
    MangaID: string;
  @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID de la orden a registrar',
      })
    @IsUUID()
    idOrder: string;
}