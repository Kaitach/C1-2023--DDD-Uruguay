import {  IsUUID,  IsNumber } from 'class-validator';
import { UpdatePriceManga } from './../../../../domain/interfaces/commands/Order-commands/Manga-Commands/update-price-command';
import {  } from '../../../../../../../../libs/validations/is-number.validations';
import { ApiProperty } from '@nestjs/swagger';
export class IupdateMangaPrice implements UpdatePriceManga {
  @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del manga a cambiar de precio',
      })
    @IsUUID()
    MangaId: string;
  @ApiProperty({
        example: 324,
        description: 'El precio del manga a actualizar',
      })
    @IsNumber()
    Price: number;
}
