import { IdOrdertValueObject } from '../../../value-objects/Order/Id-Order-value/id-order-value';
import { IClientEntity } from './client.interface';
import { IMangaEntity } from './manga.interface';
/* An interface that is used to create a new object. */
export interface IOrderentity {

    
    orderId?: string |  IdOrdertValueObject
    client?:  IClientEntity
    Manga?: IMangaEntity

}