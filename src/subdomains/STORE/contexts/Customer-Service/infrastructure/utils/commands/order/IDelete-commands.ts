import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { IDeleteOrder } from 'src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands';
export class IDeleteCommands implements   IDeleteOrder{
  @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID de la orden  a borrar',
      })
    @IsUUID()
    OrderID: string;
} 
 