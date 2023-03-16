import { IdmangaValue } from './idmanga-value';

describe("validate Id", () => {

  it("poniendo otro dato para manga uuid", () => {
    const value = "invalid-value";
    const mangaId = new IdmangaValue(value);
  
    mangaId.validateData();
  
    expect(mangaId.hasErrors()).toBeFalsy();
    const errors = mangaId.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('UsuarioId');
      expect(errors[0].message).toBe('El id no contiene una estructura valida ');
    }  
    
   
  });
  it("Test UUID manga ", () => {
    const value = "f0b9c684-7d28-4c58-9947-f66f71dd3ab3";
    const manga = new IdmangaValue(value);
  
  manga.validateData();
  
    expect(manga.hasErrors()).toBeTruthy();
    const errors = manga.getErrors();
    if (errors.length > 0) {
      expect(errors[0].field).toEqual('manga id');
      expect(errors[0].message).toBe('El id no contiene una estructura valida ');
    }  
   
  });
  
  })