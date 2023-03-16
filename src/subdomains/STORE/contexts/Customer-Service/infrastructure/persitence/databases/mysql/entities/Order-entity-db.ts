import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, Index, OneToMany } from 'typeorm';
import { ClientEntityDB } from './Client-entity-db';
import { MangaEntityDb } from './Manga-entity-db';
import { OrderDomainEntityBase } from '../../../../../domain/entities/Order-domain/Order-domain-entity';


@Entity()
export class OrderEntityDb extends OrderDomainEntityBase {
  @PrimaryGeneratedColumn('uuid')
  orderId: string;


  @ManyToOne(() => ClientEntityDB, (client) => client.ClientID, {
    cascade: ['insert', 'update']
  })
  @JoinColumn()
  client: ClientEntityDB;
  

  @ManyToOne(() => MangaEntityDb, (Manga) => Manga.Mangaid,{
    cascade: ['insert', 'update']
  })
  @JoinColumn()
  Manga: MangaEntityDb;
}