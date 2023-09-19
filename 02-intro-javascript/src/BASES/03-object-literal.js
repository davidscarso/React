const persona = {
    nombre: 'Tony',
    apellido: 'Starck',
    edad: 45,
    direccion: {
        ciudad: 'New Yock',
        zip: 54545,
        lat: 14.454654,
        lng: 34.131313,
    }
};

console.log(persona);
// console.log({ persona });
// console.table(persona);

//si "clonamos" asi, estamos copiando la referencia y no copiando.
// const persona2 = persona;
// persona2.nombre = 'peter';
// console.log(persona, persona2);


//Spred para copiar!!!
const persona3 = { ...persona };
persona3.nombre = 'peter';
console.log(persona, persona3);






