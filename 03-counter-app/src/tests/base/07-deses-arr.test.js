import { retornaArreglo } from '../../base/07-deses-arr';

describe('pruebas en desestructuracion', () => {

    test('retornaArreglo() debe retornar un string y un numero', () => {

        const arr = ['ABC', 123];
        const arrRes = retornaArreglo();


        expect(arrRes).toEqual(arr);

        expect(typeof (arrRes[0])).toBe('string');
        expect(arrRes[0]).toBe(arr[0]);

        expect(typeof (arrRes[1])).toBe('number');
        expect(arrRes[1]).toBe(arr[1]);

    });
});