import { IdsellerValue } from "../../value-objects/Sale/Seller/idseller-value/idseller-value";
import { NameSellerValue } from "../../value-objects/Sale/Seller/name-value";
import { ISellerEntity } from "../interfaces/Sale/seller.interface";
import { v4 as uuidv4 } from 'uuid';
/* The class is a TypeScript class that implements the ISellerEntity interface. The class has a
constructor that takes an optional parameter of type ISellerEntity. The constructor assigns the
values of the optional parameter to the class properties */

export class SellerDomain  implements ISellerEntity{
    IdSeller?: string | IdsellerValue;
    Name: string |   NameSellerValue;
   

    constructor (_data?: ISellerEntity){

        if(_data?.IdSeller) this.IdSeller = _data.IdSeller
        

        if (_data?.Name) this.Name = _data.Name;


    }
}
