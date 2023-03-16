import { BillDomain, SaleDomainEntity, SellerDomain } from "src/subdomains/Store/contexts/Customer-Service/domain/entities";
import { PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, Entity, Index, ManyToOne } from "typeorm";
import { BillEntityDB } from "./Bill-entity";
import { SellerEntityDB } from "./sellerEntityDb";

@Entity()


export class saleEntityBd extends SaleDomainEntity {


    @ManyToOne(() => BillEntityDB, (Bill) => Bill.sale, {
        cascade: ['insert', 'update']
    })
    @JoinColumn()
    Bill?: BillEntityDB;
    @Index()


    @ManyToOne(() => SellerEntityDB, (Seller) => Seller.sale, {
        cascade: ['insert', 'update']
    })
    @JoinColumn()
    Seller?: SellerEntityDB;

    @PrimaryGeneratedColumn('uuid')
    IDSale?: string

    @Column()
    IDOrder?: string

}