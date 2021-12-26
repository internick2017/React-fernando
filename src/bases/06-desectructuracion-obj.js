// DESESTRUCTURACION Objetos
// ASIGNACION DESESTRUCTURANTE

const persona = {
    nombre: 'Nick',
    edad: '33',
    clave: 'cabeza de melon',
    // rango: 'militar'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const usoContexto = ({ clave, nombre, edad, rango = "capitan" }) => {

    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anos: edad,
        latitudLng:{
            lat:14.2555,
            long: -15.45558
        }
    }

}

const {nombreClave, anos, latitudLng:{lat,long}} = usoContexto(persona);
// const {nombreClave, anos, latitudLng} = usoContexto(persona);

const {lat,long} = latitudLng;

console.log(nombreClave, anos);
console.log(lat,long);