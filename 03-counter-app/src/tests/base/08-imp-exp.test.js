import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en funciones de heroes', () => {

    test('debe retornar un heroes por id', () => {

        const id = 1;
        const heroeRes = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroeRes).toEqual(heroeData);
    });
    
    test('debe retornar undefine si heroes no existe', () => {
        
        const id = 10;
        const heroeRes = getHeroeById(id);
        
        expect(heroeRes).toBe(undefined);
    });
    
    test('debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const heroesRes = getHeroesByOwner(owner);
        
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroesRes).toEqual(heroesData);
    });
    
    
    
    test('debe retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const lentghTest = 2;
        const heroesRes = getHeroesByOwner(owner);
        
        // const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroesRes.length).toBe(lentghTest);
    });


})