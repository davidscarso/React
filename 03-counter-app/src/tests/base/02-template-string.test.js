import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar hola nombre', () => {
        const nombre = 'david';
        const saludo2 = 'Hola david';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe(saludo2);
    });

    test('getSaludos debe retornar Hola Carlos! si no hay argumento nombre', () => {
        const saludo2 = 'Hola Carlos!';

        const saludo = getSaludo();

        expect(saludo).toBe(saludo2);

    });
});



// Video 8!