import { Injectable } from "@nestjs/common";
import { BillRepository } from "../../databases/mysql";
import { BillMySqlService } from '../../databases/mysql/services/IBill-Domain-Service';


@Injectable()
export class BillService extends BillMySqlService { 
    constructor(private readonly billRepository: BillRepository) {
        super(billRepository);
      }
 }