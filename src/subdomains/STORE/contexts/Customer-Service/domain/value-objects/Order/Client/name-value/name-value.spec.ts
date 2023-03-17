
import { ClientNameValue } from "./";

 /* Testing the name with numbers. */
  describe("Nombre correcto", () => {
    it("test name" , () => {

      const value = "Franco";

      const NameClient = new ClientNameValue(value);

      NameClient.validateData();

      expect(NameClient.hasErrors()).toBeFalsy();
      const errors = NameClient.getErrors();

      if (errors.length > 0) {
        expect(errors[0].field).toEqual('Name');
        expect(errors[0].message).toBe('El dato ingresado en "name" no contiene una estructura valida ');
            }
         
    });

    it("prueba nombre con numeros " , () => {

        const value = "Fr4nc0 Torres";
  
        const NameClient = new ClientNameValue(value);
  
        NameClient.validateData();
  
        expect(NameClient.hasErrors()).toBeTruthy()
        const errors = NameClient.getErrors();
        if (errors.length > 0) {
          expect(errors[0].field).toEqual('Name');
          expect(errors[0].message).toBe('El dato ingresado en "name" no contiene una estructura valida ');
              }
        
      });

   /* *|MARCADOR_CURSOR|* */
      it("prueba nombre  con espacios " , () => {

        const value = "F R A N C O ";
  
        const NameClient = new ClientNameValue(value);
  
        NameClient.validateData();
  
        expect(NameClient.hasErrors()).toBeTruthy();
        const errors = NameClient.getErrors();

        if (errors.length > 0) {
          expect(errors[0].field).toEqual('Name');
          expect(errors[0].message).toBe('El dato ingresado en "name" no contiene una estructura valida ');
              }    
      });
  });
