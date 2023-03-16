import { BillRepository } from './../repositories/Bill-repository';
import { SellerRepository } from './../repositories/Seller-repository';
import { SaleDomainService } from "src/subdomains/Store/contexts/Customer-Service/domain/services";
import { saleEntityBd } from "../entities/Sale-entity";
import { SaleRepository } from '../repositories/Sale-Repository';
import { SellerEntityDB } from '../entities/sellerEntityDb';
import { BillEntityDB } from '../entities/Bill-entity';



export class SaleMySqlService
    implements SaleDomainService<saleEntityBd>{
    constructor(private readonly SaleRepository: SaleRepository,
         private readonly BillRepository: BillRepository,
          private readonly SellerRepository: SellerRepository) { }

    RegisterSale(data: saleEntityBd): Promise<saleEntityBd> {
        return this.SaleRepository.create(data)
    }
  
    GetSalesList(data: string): Promise<saleEntityBd> {
        return this.SaleRepository.findById(data)
    }
     AddSeller(data: SellerEntityDB): Promise<SellerEntityDB> {
        return  this.SellerRepository.create(data)
    }
    UpdateSeller(data: SellerEntityDB): Promise<SellerEntityDB> {
       

        return this.SellerRepository.update(data.IdSeller, data)
    }

    GetSellers(data: string): Promise<SellerEntityDB> {
        return this.SellerRepository.findById(data)
    }

    GetBil(data: string): Promise<BillEntityDB> {

        console.log(data)
        return this.BillRepository.findById(data)
    }

}