import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";
import { IGetManga } from "../../../../domain/interfaces/commands";

/* This class is used to validate the data that is sent to the API when a user wants to get a manga */
export class IGetMangaCommand implements IGetManga {
  @ApiProperty({
        example: 'e3fda83e-aa89-4f12-9bb0-63f0cde54d92',
        description: 'El ID del manga a buscar',
      })
    @IsUUID()
    MangaID: string;
}
