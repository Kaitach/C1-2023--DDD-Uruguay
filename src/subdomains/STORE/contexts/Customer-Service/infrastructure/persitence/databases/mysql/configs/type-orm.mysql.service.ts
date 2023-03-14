import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { MangaEntityDb, OrderEntityDb } from "../entities";
import { BillEntityDB } from '../entities/Bill-entity';
import { ClientEntityDB } from '../entities/Client-entity-db';
import { saleEntityBd } from "../entities/Sale-entity";
import { SellerEntityDB } from "../entities/sellerEntityDb";

@Injectable()

export class TypeOrmMysqlConfigService implements TypeOrmOptionsFactory {

 constructor(private readonly configService: ConfigService){}
    
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions{


        return {
            type: 'mysql',
            host: "localhost",
            port: 3306,
            username: "root",
            password:  '1234',
            database:  'basededatostiendamanga',
            entities: [
                BillEntityDB,ClientEntityDB,saleEntityBd,OrderEntityDb,SellerEntityDB,MangaEntityDb
            ],
            synchronize: true,
        }
    }




}