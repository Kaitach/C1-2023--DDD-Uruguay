import { IUpdateMangaStock } from "../../../../domain/interfaces/commands";
import { IsNumber,  IsUUID } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class IUpdateMangaStockCommand implements IUpdateMangaStock {
    @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del manga a cambiar de stock',
      })
    @IsUUID()
    MangaId: string;
      @ApiProperty({
        example: 25,
        description: 'El stock del manga a actualizar',
      })
    @IsNumber()
    MangaStock: number;
}
