// Funciones en JS

// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }
//console.log(saludar('Goku'));

// saludar=30;  podemos cometer errores al realizar asi las funciones
//console.log(saludar('Goku'));


const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

 //saludar=30; // ahora esto da un error
console.log(saludar('Goku'));


// funcion de flecja op Lamda

const saludar2 = (nombre)=> {
    return `Hola, ${nombre}`;
}
console.log(saludar2('Vegeta'));

// mas simplificada
const saludar3 = (nombre)=> `Hola, ${nombre}`;
console.log(saludar3('Gojan'));

// mas simplificada
const saludar4 = ()=> `Hola mundo`;
console.log(saludar4());





