import { crearCart } from "./crearhtml.js";
import { infoFunkos } from "./funkos.js";
import { sumarPrecio } from "./aritmetica.js";
import { arrPrecios } from "./aritmetica.js";
document.title = "Cart | Funkoshop";

const bandeja = document.getElementById('bandeja');
const harrypotter = infoFunkos.harrypotter, pokemon = infoFunkos.pokemon, starwars = infoFunkos.starwars;
const tagArray = document.getElementsByTagName('span'), promo = document.getElementById('promoCode');



let cantidadCart = arrPrecios(pokemon);
let cantidadDisc = tagArray[4].innerText;
let promoCode = promo.innerText;

console.log(cantidadCart.length);
console.log(cantidadDisc);
console.log(promoCode);



console.log();
console.log("Ud. tiene como monto los valores: " + arrPrecios(harrypotter));
console.log("La suma de los funkos es " + sumarPrecio(harrypotter));
console.log("______________________________________________________");
console.log("La lista de precios a sumar es " + arrPrecios(pokemon));
console.log("Tus funko suman la cantidad de " + sumarPrecio(pokemon));
console.log("______________________________________________________");
console.log("Los precios son: " + arrPrecios(starwars));
console.log("La suma de los funkos de Star War es " + sumarPrecio(starwars));

//evalua cual número es el mayor
console.log(Math.max(a,b,c,d,e));

//Items de la lista
setTimeout(() => {
  bandeja.innerHTML = '<H1 class="text-light">Cargando...</H1>';
  setTimeout(() => {
    bandeja.innerHTML = "";
    setTimeout(() => {
      crearCart(harrypotter);
      crearCart(pokemon);
      crearCart(starwars);
    }, 100);
  }, 2900);
}, 500);

if (cantidadCart.length >= 0) {
  console.log("hay " + cantidadCart.length + " objetos");
} else {
  console.log("no hay");
}


/* 
//contador en resta
for (let index = 10; index > -1; index--) {
  console.log("______________________________________________________");
  console.log(index + " objetos");
}
  
console.log(a,b,c);
console.log(MayorDeTodos(a,b,c));

function filtradoFunko(filtro) {
  let filtrado = starwars.filter((el) => {
    return el.modelo.includes(filtro);
  });
  return filtrado;
}
console.log(filtradoFunko("Baby yoda blueball"));
*/