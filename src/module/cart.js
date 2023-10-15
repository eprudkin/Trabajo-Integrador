import { crearCart } from "./crearhtml.js";
import { sumarPrecio, arrPrecios } from "./aritmetica.js";
import { infoFunkos } from "./funkos.js";
import { FunkosObj } from "./FunkosObj.js";
import { carrito } from "./funciones.js"


document.title = "Cart | Funkoshop";


const bandeja = document.getElementById('bandeja');
const harrypotter = FunkosObj.harrypotter, pokemon = FunkosObj.pokemon, starwars = FunkosObj.starwars;
const tagArray = document.getElementsByTagName('span'), promo = document.getElementById('promoCode'), total = document.getElementById('totalDolares');
let seleccionados = JSON.parse(carrito);


let cantidadCart = arrPrecios(infoFunkos);
let cantidadDisc = tagArray[4].innerText;
let promoCode = promo.innerText;


const valorAPagar = sumarPrecio(seleccionados)

let p = document.createElement('p');
p.innerText = valorAPagar;



console.log(cantidadCart.length);
console.log(cantidadDisc);
console.log(promoCode);
console.log(total);

console.log();
console.log("Ud. tiene como monto los valores: " + arrPrecios(pokemon));
console.log("La suma de los funkos es " + sumarPrecio(pokemon));
console.log("______________________________________________________");
console.log("La lista de precios a sumar es " + arrPrecios(harrypotter));
console.log("Tus funko suman la cantidad de " + sumarPrecio(harrypotter));
console.log("______________________________________________________");
console.log("Los precios son: " + arrPrecios(starwars));
console.log("La suma de los funkos de Star War es " + sumarPrecio(starwars));





/* for (let index = 0; index < FunkosMatriz.length; index++) {
  let fila = FunkosMatriz[index];    
  for (let x = 0; x < fila.length; x++) {
    console.log(fila[x]);
  }
} */
  
  
//Una vez que se realiza el checkout, se aplica el localStorage.removeItem('cart'); o localStorage.clear();
    
console.log(sumarPrecio(seleccionados));





//Items de la lista
setTimeout(() => {
  bandeja.innerHTML = "<H1>Cargando.</H1>";
  setTimeout(() => {
    bandeja.innerHTML = "<H1>Cargando..</H1>";
    setTimeout(() => {
      bandeja.innerHTML = "<H1>Cargando...</H1>";
      setTimeout(() => {
        bandeja.innerHTML = "";
        crearCart(seleccionados)
        total.innerHTML = "";
        setTimeout(() => {
          total.appendChild(p);          
        },1000)
      }, 1000);  
    }, 1000);
  }, 1000);
}, 1000);

if (cantidadCart.length >= 0) {
  console.log("hay " + cantidadCart.length + " objetos");
} else {
  console.log("no hay");
}



//contador en resta
/* for (let index = 10; index > -1; index--) {
  console.log("______________________________________________________");
  console.log(index + " objetos");
}
 
function filtradoFunko(filtro) {
  let filtrado = starwars.filter((el) => {
    return el.modelo.includes(filtro);
  });
  return filtrado;
}
console.log(filtradoFunko("Baby yoda blueball"));
 */