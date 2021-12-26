// DESESTRUCTURACION Arreglos
// ASIGNACION DESESTRUCTURANTE


const personajes = ['goku', 'vegeta', 'gohan'];


// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, , p3] = personajes;

console.log(p3);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

// Tarea 
// primer valor del arreglo se llamara nombre
// segundo valor del arreglo se llamara setNombre

 const  arrayEstado= (valor) =>{
     return [valor,()=>{console.log("hola mundo")}];
 }

 const [nombre,setNombre] = arrayEstado('Nick');

console.log(nombre);
setNombre();