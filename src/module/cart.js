import { crearCart } from "./crearhtml.js";
import { infoFunkos } from "./funkos.js";
import { MayorDeTodos } from "./numeroMAyor.js"
document.title = "Cart | Funkoshop";

const bandeja = document.getElementById('bandeja');
const harrypotter = infoFunkos.harrypotter, pokemon = infoFunkos.pokemon, starwars = infoFunkos.starwars;
let a = pokemon[0].precio, b = pokemon[1].precio, c = pokemon[2].precio;

console.log(a,b,c);
console.log(MayorDeTodos(a,b,c));



function filtradoFunko(filtro) {
    let filtrado = starwars.filter((el) => {
        return el.modelo.includes(filtro);
    });
    return filtrado;
}
console.log(filtradoFunko("Baby yoda blueball"));




setTimeout(() => {
  bandeja.innerHTML = '<H1 class="text-light">Cargando...</H1>';
  setTimeout(() => {
    bandeja.innerHTML = "";
    setTimeout(() => {
      crearCart(harrypotter);
    crearCart(pokemon);
    crearCart(starwars);
    }, 100);
  },2900);
}, 500);


let arr = ["a"] ;
const listaProducto = ["a", "b", "c"];

if (listaProducto.length >= arr.length) {
  console.log(pokemon[0].precio);
  console.log(pokemon[1].precio);
  console.log(pokemon[2].precio);
  console.log(pokemon[3].precio);
  console.log(pokemon[4].precio);
  console.log(starwars[0].precio);
  console.log(starwars[1].precio);
  console.log(starwars[2].precio);
  console.log(starwars[3].precio);
  console.log(harrypotter[0].precio);
  console.log(harrypotter[1].precio);
  console.log(harrypotter[2].precio);
  console.log(harrypotter[3].precio);
} else {
  console.log('<H6>Nombre de Productos</H6>');
}