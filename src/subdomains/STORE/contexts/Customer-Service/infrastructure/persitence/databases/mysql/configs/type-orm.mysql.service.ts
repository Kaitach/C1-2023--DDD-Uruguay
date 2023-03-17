import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ClientEntityDB, OrderEntityDb, MangaEntityDb, BillEntityDB, saleEntityBd, SellerEntityDB } from "../entities";
import { EventMySqlEntity } from '../entities/event.entity';


@Injectable()

export class TypeOrmMysqlConfigService implements TypeOrmOptionsFactory {

 constructor(private readonly configService: ConfigService){}
     
 
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions{


        return {            
            type: 'mysql',
            name: connectionName,
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USER'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [
                BillEntityDB,ClientEntityDB,saleEntityBd,OrderEntityDb,SellerEntityDB,MangaEntityDb,EventMySqlEntity
            ],
            synchronize: true,
        }
    }




}