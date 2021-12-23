

const persona = {
    nombre: "Nick",
    apellido: "Granados",
    edad: 33,
    direccion:{
     ciudad: "Francisco Beltrão",
     zipCode: "85601-200",
     barrio: "alvorada"
    }
};


//console.table({ persona })

const persona2 =  {...persona};

persona2.nombre = "peter";

console.log( persona2)
console.log( persona)