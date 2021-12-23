// Funciones en JS

const saludar = function (nombre) {
    return `hola, ${nombre}`;
}


const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
}

const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => `hola, mundo`;

// console.log(saludar('Nick'))

console.log(saludar2('David'));
console.log(saludar3('Diego'));
console.log(saludar4());


// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'el_papito_07'
//     }
// }
const getUser = () => ({
    uid: 'ABC123',
    username: 'el_papito_07'
})

const user = getUser();
console.log(user)

// Tarea
// 1. tranformar en funcion de flecha
// 2.retornar objeto implicito
// 3.pruebas

const getUsuarioActivo = (nombre) => ({
    uid: "abdcdf567",
    username: nombre
})


const usuarioActivo = getUsuarioActivo('Fernando caminando');

console.log(usuarioActivo)