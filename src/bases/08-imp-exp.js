//  Import, export y funciones comunes de arreglos
// import { heroes } from "./data/heroes";
// import {heroes} from './data/heroes'
// import { heroes } from './data/heroes'
// import cualquierCosaArr from './data/heroes'
import  heroes, {owners}  from '../data/heroes'
// import  {heroes, owners}  from './data/heroes'

// console.log(owners);

// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false
//         }
//     });
// }

// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => heroe.id === id);
// }


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(5));


export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('Marvel')); 