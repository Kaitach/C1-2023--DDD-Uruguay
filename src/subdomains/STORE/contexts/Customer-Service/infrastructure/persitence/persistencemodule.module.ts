/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MysqlModule } from './databases/mysql/mysql.module';
import { BillService, ClientService, MangaService, OrderService, SaleService, SellerService } from './services';
import { EventService } from './services/event.service';

@Module({
    imports: [MysqlModule],
    exports: [ClientService, OrderService, BillService, SellerService,MangaService,SaleService, EventService],
    providers: [ ClientService, OrderService, BillService, SellerService,MangaService,SaleService, EventService],
})
export class PersistenceModuleModule {}
