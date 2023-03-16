import { ClientDomainBase } from '.';

  describe('constructor', () => {
    it('debería establecer las propiedades correctamente cuando se proporciona data', () => {
      const data = {
        Name: 'John',
        Phone: 1234567890,
      };

      const clientDomainBase = new ClientDomainBase(data);

      expect(clientDomainBase.ClientID).toEqual(expect.any(String));
      expect(clientDomainBase.Name).toEqual('John');
      expect(clientDomainBase.Phone).toEqual(1234567890);
    });

    it('debería establecer la propiedad ClientID con un nuevo uuid cuando no se proporciona data', () => {
      const clientDomainBase = new ClientDomainBase();

      expect(clientDomainBase.ClientID).toBeDefined();
    });
  });
