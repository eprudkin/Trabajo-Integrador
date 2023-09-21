import { crearCart } from "./crearhtml.js";
import { infoFunkos } from "./funkos.js";

document.title = "Cart | Funkoshop";

const bandeja = document.getElementById('bandeja');
const harrypotter = infoFunkos.harrypotter, pokemon = infoFunkos.pokemon, starwars = infoFunkos.starwars;

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