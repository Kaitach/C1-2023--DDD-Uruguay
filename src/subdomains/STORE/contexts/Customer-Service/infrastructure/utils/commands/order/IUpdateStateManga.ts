import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';
import { UpdateStateManga } from 'src/subdomains/Store/contexts/Customer-Service/domain/interfaces/commands';
export class IUpdateStateManga implements UpdateStateManga  {
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del manga a cambiar de estado',
      })
    @IsUUID()
    MangaId: string;
    @ApiProperty({
        example: 'En emision',
        description: 'El estado del manga',
      })
    @IsString()
   State: string;
}
