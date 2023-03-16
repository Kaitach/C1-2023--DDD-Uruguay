import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/* It's a class that represents a row in a table called "event" in a MySQL database. 

The class has three properties: 

1. eventID
2. type
3. data

The eventID property is a string that represents the primary key of the row. 

The type property is a string that represents the type of event. 

The data property is a string that represents the data of the event. 

The createdAt property is a string that represents the date and time the event was created. */
@Entity('event')
export class EventMySqlEntity {
    @PrimaryGeneratedColumn('uuid')
    eventID: string
    @Column()
    type: string;

    @Column({ length: 10000 })
    data: string;

    @Column()
    createdAt: string;
}