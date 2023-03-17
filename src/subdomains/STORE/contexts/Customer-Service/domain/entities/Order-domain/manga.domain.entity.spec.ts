import {  MangaDomainBase } from '.';

  describe('constructor', () => {
    it('debería establecer las propiedades correctamente cuando se proporciona data', () => {
      const data = {
        Name: "One Piece",
        state: "Completed",
        Price: 1099,
        Stock: 50
      };

      const mangaDomainBase = new MangaDomainBase(data);

      expect(mangaDomainBase.Name).toEqual('One Piece');
      expect(mangaDomainBase.Price).toEqual(1099);
      expect(mangaDomainBase.Stock).toEqual(50);
      expect(mangaDomainBase.state).toEqual('Completed');

    });

    it('debería establecer la propiedad price no existe', () => {
      const mangaDomainBase = new MangaDomainBase();

      expect(mangaDomainBase.Price).not.toBeDefined();
    });
  });
