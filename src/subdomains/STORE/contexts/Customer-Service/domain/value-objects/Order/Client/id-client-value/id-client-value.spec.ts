import { IdClientValueObject } from './';
/* A test case for the IdClientValueObject class. */

describe("validate Id", () => {

/* The above code is validating the UUID of the client. */
  it("Validando client UUID", () => {
    const value = "validando uuid";
    const mangaId = new IdClientValueObject(value);
  
    mangaId.validateData();
  
    expect(mangaId.hasErrors()).toBeFalsy();
    const errors = mangaId.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('UsuarioId');
      expect(errors[0].message).toBe('El id no contiene una estructura valida ');
    }   
    
   
  });
  it("Test UUID ", () => {
    const value = "f0b9c684-7d28-4c58-9947-f66f71dd3ab3";
    const seller = new IdClientValueObject(value);
  
    seller.validateData();
  
    expect(seller.hasErrors()).toBeTruthy();
    expect(seller.getErrors()[0].field).toBe('UsuarioId')
    expect(seller.getErrors()[0].message).toBe('El id no contiene una estructura valida ')
  });
  
  })