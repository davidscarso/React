describe('Pruebas en el archivo demo,test.js', () => {
    test('Deden se iguales los stings', () => {
        //1. inicialización
        const mensaje = 'Hola Mundo';

        //2. estimulo
        const mensaje2 = `Hola Mundo`;

        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});

