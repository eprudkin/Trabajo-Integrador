import { crearHtml } from "./crearhtml.js";
import { infoFunkos } from "./funkos.js";

const bandeja = document.getElementById('bandeja');
const btnBuscar = document.getElementById('btnBuscar');
const next = document.getElementById('next');
const back = document.getElementById('next');
const input = document.querySelectorAll('input[type = "text"]');
const orden = document.getElementById('orden');


document.title = "Shop | Funkoshop";
const harrypotter = infoFunkos.harrypotter, pokemon = infoFunkos.pokemon, starwars = infoFunkos.starwars;





btnBuscar.addEventListener('click', (e)=>{
  e.preventDefault();
  bandeja.innerHTML = "<H1>Cargando.</H1>";
  setTimeout(() => {
    bandeja.innerHTML = "<H1>Cargando..</H1>";
  }, 1000);
  setTimeout(() => {
    bandeja.innerHTML = "<H1>Cargando...</H1>";
  }, 1200);
  setTimeout(() => {
    bandeja.innerHTML = "";
  }, 1500);
  setTimeout(() => {
    crearHtml(pokemon);
    crearHtml(harrypotter);
    crearHtml(starwars);
  }, 2000);
}); 

/* 

next.addEventListener('click', (e) => {
  e.preventDefault();
  bandeja.innerHTML = "";
  crearHtml(infoFunkos.pokemon);
})

back.addEventListener('click', (e) => {
  e.preventDefault();
  bandeja.innerHTML = "";
  crearHtml(infoFunkos.starwars);
})
let buscar = input[0].value
console.log(buscar);


  
  

for (const lista of orden) {
  console.log(lista.innerHTML);
}
*/


  
function guardarEnstorage(encontrado) {
  return localStorage.setItem('cart', JSON.stringify(encontrado))
}

function findQuimi(datos, filtro) {
  return datos.find((el) => el.nombre.includes(filtro));
}

