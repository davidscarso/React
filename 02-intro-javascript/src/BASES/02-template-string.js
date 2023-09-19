const nombre = 'David';
const apellido = 'Scarso';

// const nombreCompleto = nombre + ' ' + apellido;
//con template Strings
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

const nombreCompletoX = `
${nombre}
${apellido}
...`;
console.log(nombreCompletoX);


function getSaludo(nombre) {
    return `¡Hola ${nombre}!`;
}


console.log(`Este en un texto: ${getSaludo(nombre)}`);