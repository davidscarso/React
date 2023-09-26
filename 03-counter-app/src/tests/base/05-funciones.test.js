import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe devolver un usurios', () => {
        const usuario = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const usuarioRes = getUser();

        expect(usuarioRes).toEqual(usuario);

    });

    test('getUsuarioActivo debe devolver un usurios por parametro', () => {
        const nombre = 'david';
        const usuario = {
            uid: 'ABC567',
            username: nombre
        };

        const usuarioRes = getUsuarioActivo(nombre);

        expect(usuarioRes).toEqual(usuario);

    });

});