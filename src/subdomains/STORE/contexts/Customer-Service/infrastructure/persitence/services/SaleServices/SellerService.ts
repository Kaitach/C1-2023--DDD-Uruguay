import { SaleMySqlService } from './../../databases/mysql/services/ISale-Domain-Service';
import { Injectable } from "@nestjs/common";
import { SellerMySqlService } from '../../databases/mysql/services/ISeller-Domain-Service';
import { SellerRepository } from '../../databases/mysql';


@Injectable()
export class SellerService extends SellerMySqlService { 
    constructor(
        
        private readonly sellerRepository: SellerRepository,
      ) {
        super(sellerRepository);
      }   
 }