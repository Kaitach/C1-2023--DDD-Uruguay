import { IdClientValueObject } from './';
/* A test case for the IdClientValueObject class. */

describe("validate Id", () => {

/* The above code is validating the UUID of the client. */
  it("Validando client UUID", () => {
    const value = "validando uuid";
    const clientID = new IdClientValueObject(value);
  
    clientID.validateData();
    expect(clientID.hasErrors()).toBeTruthy();
    const errors = clientID.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('UsuarioId');
      expect(errors[0].message).toBe('El id no contiene una estructura valida ');
    }   
    
   
  });
  it("Test UUID ", () => {
    const value = "f0b9c684-7d28-4c58-9947-f66f71dd3ab3";
    const clientID = new IdClientValueObject(value);
  
    clientID.validateData();
  
    expect(clientID.hasErrors()).toBeFalsy();
    const errors = clientID.getErrors();

    if (errors.length > 0) {

    expect(clientID.getErrors()[0].field).toBe('UsuarioId')
    expect(clientID.getErrors()[0].message).toBe('El id no contiene una estructura valida ')}
  });
  
  })