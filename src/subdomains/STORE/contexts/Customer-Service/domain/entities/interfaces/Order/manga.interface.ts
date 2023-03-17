import { IdmangaValue, MangaSateValue, NameMangaValue, PriceValue, StockValue } from "../../../value-objects";

/* A interface that is used to create a new object. */
export interface IMangaEntity {

    Mangaid?: string | IdmangaValue
    Name?:string |  NameMangaValue
    state?:string |  MangaSateValue
    Price?:number |  PriceValue
    Stock?: number | StockValue

}
