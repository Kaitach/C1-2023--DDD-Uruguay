import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';
import { UpdatePhoneClient } from 'src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands';
export class IupdatePhoneClient implements  UpdatePhoneClient{
  @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del cliente a actualizar',
      })
    @IsUUID()
    ClientID: string;
      @ApiProperty({
        example: 9487194,
        description: 'El telefono del cliente  a actualizar',
      })
    @IsString()
    Phone: number;
}
