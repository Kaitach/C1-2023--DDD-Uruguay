import { IdOrdertValueObject } from "../../value-objects/Order";
import { IOrderentity } from "../interfaces/Order/order.interface";
import { ClientDomainBase } from "./client-domain-entity";
import { MangaDomainBase } from "./manga-domain-entity";
import { v4 as uuidv4 } from 'uuid';
/* This class is a base class for the Order Domain Entity. It implements the IOrderentity interface. It
has a constructor that takes in an optional IOrderentity object. If the object is passed in, the
constructor assigns the values of the object to the class properties. If the object is not passed
in, the constructor assigns a new uuid to the orderId property */

export class OrderDomainEntityBase implements IOrderentity {

    client?:  ClientDomainBase;
    Manga?: MangaDomainBase;
    orderId?: string |  IdOrdertValueObject
    
    constructor (_data?: IOrderentity){

        if(_data?.orderId) this.orderId = _data.orderId
        
        else this.orderId = uuidv4()      

        if (_data?.client) this.client = _data.client;

        if (_data?.Manga) this.Manga = _data.Manga;
    


    }

}


