import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import { UpdateNameManga } from "../../../../domain/interfaces/commands/Order-commands";

export class IUpdateMangaName implements UpdateNameManga {
  @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del manga a cambiar de nombre',
      })
    @IsUUID()
    MangaId: string;
      @ApiProperty({
        example: 'Naruto',
        description: 'El nombre  del manga a actualizar',
      })
    @IsString()
    Name: string;
}
