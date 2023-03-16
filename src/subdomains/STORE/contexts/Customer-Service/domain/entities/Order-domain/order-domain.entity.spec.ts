import { IdOrdertValueObject } from "../../value-objects";
import { ClientDomainBase } from "./client-domain-entity";
import { MangaDomainBase } from "./manga-domain-entity";
import { OrderDomainEntityBase } from './Order-domain-entity';


describe('constructor', () => {
    it('debería establecer las propiedades correctamente cuando se proporciona data', () => {
      const data = {
        client: new ClientDomainBase({ Name: 'John', Phone: 1234567890 }),
        Manga: new MangaDomainBase({ Mangaid: 'f5f4de8a-39f7-4396-8cfe-7ec0d3f6206d', Name: 'One Piece', state: 'Completed', Price: 10.99, Stock: 50 }),
      };

      const orderEntity = new OrderDomainEntityBase(data);

      expect(orderEntity.client).toEqual(data.client);
      expect(orderEntity.Manga).toEqual(data.Manga);
    });



    it('debería establecer las propiedades correctamente cuando se proporciona data', () => {
        const orderEntity = new OrderDomainEntityBase();

        expect(orderEntity.orderId).toBeDefined();
  });
  })
