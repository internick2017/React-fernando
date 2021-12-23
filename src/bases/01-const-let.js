// Variables y Constantes


const  nombre = 'Nick';
const apellido = 'Granados';
let valorDado = 5;

valorDado = 4;

console.log(nombre, apellido,valorDado)

// no se deve usar el var
if(true){
    const nombre = 'Peter';
    let valorDado = 6;

    console.log(valorDado, nombre)
}

console.log(valorDado)