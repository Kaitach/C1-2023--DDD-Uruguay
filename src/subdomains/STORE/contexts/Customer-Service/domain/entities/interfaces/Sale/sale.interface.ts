import { IdOrdertValueObject } from "../../../value-objects";
import { IdSaleValueObject } from "../../../value-objects/Sale/Id-Sale-value";
import { IBillEntity } from "./bill.interface";
import { ISellerEntity } from './seller.interface';

/* An interface that is used to create a new object. */
export interface ISaleEntity {


    Bill?: IBillEntity 
    Seller?:  ISellerEntity
    IDSale?: string |   IdSaleValueObject
    IDOrder?: string |   IdOrdertValueObject


}
