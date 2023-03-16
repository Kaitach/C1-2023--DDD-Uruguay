import { Injectable } from "@nestjs/common";
import { MangaRepository } from "../../databases/mysql";
import { MangaMySqlService } from "../../databases/mysql/services/IManga-Domain-Service";


@Injectable()
export class MangaService extends MangaMySqlService { 

    constructor(private readonly mangaRepository: MangaRepository) {
        super(mangaRepository);
      }
 }