import { PhoneValue } from './phone-value';


describe("validando Phone", () => {

  it("probando validar solo 2 numeros", () => {
    const value = 32;
    const phone = new PhoneValue(value);
  
    phone.validateData();
  
    expect(phone.hasErrors()).toBeFalsy();
    const errors = phone.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('Phone');
      expect(errors[0].message).toBe('El dato ingresado en "Phone" no contiene una estructura valida ');
    }   
    
   
  });
  it("Test probando numeros ", () => {
    const value = +919367788755;
    const Phone = new PhoneValue(value);
  
    Phone.validateData();
  
    expect(Phone.hasErrors()).toBeTruthy();
    expect(Phone.getErrors()[0].field).toBe('Phone')
    expect(Phone.getErrors()[0].message).toBe('El dato ingresado en "Phone" no contiene una estructura valida ')
  });
  
  })