import { IdmangaValue, NameMangaValue, MangaSateValue, PriceValue, StockValue } from "../../value-objects";
import { IMangaEntity } from "../interfaces/Order/manga.interface";
import { v4 as uuidv4 } from 'uuid';

/* A class that implements the IMangaEntity interface. */
export class MangaDomainBase implements IMangaEntity {
    Mangaid?: string |IdmangaValue;
    Name?: string |  NameMangaValue;
    state?: string | MangaSateValue;
    Price?: number | PriceValue;
    Stock?: number |StockValue;



   /**
    * The constructor function is a function that is called when a new instance of the class is created
    * 
    * Arguments:
    * 
    * * `_data`: IMangaEntity
    */
    constructor (_data?: IMangaEntity){

        if(_data?.Mangaid) this.Mangaid = _data.Mangaid
        

        if (_data?.Name) this.Name = _data.Name;

        if (_data?.Price) this.Price = _data.Price;
    
        if (_data?.state) this.state = _data.state;

        if (_data?.Stock) this.Stock = _data.Stock;


    }
}
