import { SaleMySqlService } from './../../databases/mysql/services/ISale-Domain-Service';
import { Injectable } from "@nestjs/common";
import { BillRepository, SaleRepository, SellerRepository } from '../../databases/mysql';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class SaleService extends SaleMySqlService {
    constructor(
        private readonly saleRepository: SaleRepository,
        private readonly billRepository: BillRepository,
        private readonly sellerRepository: SellerRepository,
      ) {
        super(saleRepository, billRepository, sellerRepository);
      }
      }
  