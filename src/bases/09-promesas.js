// Promesas

import { getHeroeById, getHeroesByOwner } from "./bases/08-imp-exp";
import heroes from "./data/heroes";


// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         //tarea 
//         // importar el get heroe
//         const heroe = getHeroeById(2);
//         // console.log(heroe)
//         // console.log('2 SEGUNDOS DESPUES')
//         resolve(heroe);
//         // reject('no se pudo encontrar el heroe');

//     }, 2000)

// });


// promesa.then((heroe) => {
//     console.log('Heroe:', heroe);
// })


// .catch(err => console.warn(err));

const geHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //tarea 
            // importar el get heroe
            const heroe = getHeroeById(id);
            // console.log(heroe)
            // console.log('2 SEGUNDOS DESPUES')
            if (heroe) {
                resolve(heroe);
            } else {
                reject('no se pudo encontrar el heroe');
            }


        }, 2000)

    });

    // return promesa;
}

geHeroesByIdAsync(1)
    .then(console.log)
    // .catch(err => console.warn(err))
    .catch(console.warn)