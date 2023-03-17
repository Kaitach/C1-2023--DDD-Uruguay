import { ClientNameValue, PhoneValue } from "../../../value-objects";
import { IdclientValue } from "../../../value-objects/Sale/Bill/idclient-value/idclient-value";

/* A interface that is used to create a new object. */
export interface IClientEntity {

    ClientID?: string |  IdclientValue
    Name?: string |   ClientNameValue
    Phone?:  number |  PhoneValue

}
