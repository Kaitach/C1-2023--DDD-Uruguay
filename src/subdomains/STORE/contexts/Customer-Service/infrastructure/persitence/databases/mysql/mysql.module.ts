/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntityDB } from './entities/Client-entity-db';
import { MangaEntityDb } from './entities/Manga-entity-db';
import { OrderEntityDb } from './entities/Order-entity-db';
import { ClientRepository } from './repositories/Client-Repository';
import { ClientMySqlService } from './services/IClient-Domain-Service';
import { TypeOrmMysqlConfigService } from './configs/type-orm.mysql.service';
import { saleEntityBd } from './entities/Sale-entity';
import { SellerEntityDB } from './entities/sellerEntityDb';
import { BillEntityDB } from './entities/Bill-entity';
import { MangaRepository } from './repositories/Manga-repository';
import { MangaMySqlService } from './services/IManga-Domain-Service';
import { OrdertMySqlService } from './services/IOrder-Domain-Service';
import { SaleMySqlService } from './services/ISale-Domain-Service';
import { BillMySqlService } from './services/IBill-Domain-Service';
import { SellerMySqlService } from './services/ISeller-Domain-Service';
import { OrderRepository } from './repositories/Order-Repository';
import { SaleRepository } from './repositories/Sale-Repository';
import { BillRepository } from './repositories/Bill-repository';
import { SellerRepository } from './repositories/Seller-repository';
import { EventMySqlEntity } from './entities/event.entity';
import { EventRepository } from './repositories';
import { EventMySqlService } from './services/event.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmMysqlConfigService,
    }),
    TypeOrmModule.forFeature([
      ClientEntityDB,
      MangaEntityDb,
      OrderEntityDb,
      saleEntityBd,
      SellerEntityDB,
      BillEntityDB,
      EventMySqlEntity

    ]),
  ],
  controllers: [],
  providers: [
    EventRepository,
    ClientRepository,
    MangaRepository,   
    OrderRepository,
    SaleRepository,    
    BillRepository,
    SellerRepository,

    EventMySqlService,
    MangaMySqlService,  
    TypeOrmMysqlConfigService,
    ClientMySqlService,
    OrdertMySqlService,
    SaleMySqlService,
    BillMySqlService,
    SellerMySqlService

  ],
  exports: [
    ClientRepository,
    MangaRepository,
    OrderRepository,
    SaleRepository,
    BillRepository,
    SellerRepository,
    EventRepository,

    EventMySqlService,
    MangaMySqlService,
    TypeOrmMysqlConfigService,
    ClientMySqlService,
    OrdertMySqlService,
    SaleMySqlService,
    BillMySqlService,
    SellerMySqlService],
})
export class MysqlModule { }
