import { NameMangaValue } from './name-value';


describe("validate Name", () => {

  it("poniendo otros tipos de datos", () => {
    const value = "0n3 p13c3";
    const manga = new NameMangaValue(value);
  
    manga.validateData();
  
    expect(manga.hasErrors()).toBeFalsy();
    const errors = manga.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('Name');
      expect(errors[0].message).toBe('El dato ingresado en "Name" no contiene una estructura valida');
    }  
    
   
  });
  it("Test nombre manga ", () => {
    const value = "One Piece";
    const manga = new NameMangaValue(value);
  
  manga.validateData();
  
    expect(manga.hasErrors()).toBeTruthy();
    const errors = manga.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('Name');
      expect(errors[0].message).toBe('El dato ingresado en "Name" no contiene una estructura valida');
    }  
   
  });
  
  })