import { crearHtml, baciarHtml } from "./crearhtml.js";

const bandeja = document.getElementById('bandeja');
const btnBuscar = document.getElementById('btnBuscar');
const next = document.getElementById('next');
const back = document.getElementById('next');
const input = document.querySelectorAll('input[type = "text"]');
const orden = document.getElementById('orden');


document.title = "Shop | Funkoshop";







export const infoFunkos = {


  'starwars': [
      {
          serie: "STAR WARS",
          modelo: "Baby yoda blueball",
          descripcion: "Figura coleccionable de baby yoda (Grogu) - The Mandalorian saga, edicion limitada",
          precio: 2000,
          img: "/star-wars/baby-yoda-1.webp",
          img2 :"/star-wars/baby-yoda-box.webp"
        },
        {
          serie: "STAR WARS",
          modelo: "Bobbafeth",
          descripcion: "Figura coleccionable de Bobbafeth - The Mandalorian saga, edicion limitada",
          precio: 2000,
          img: "/star-wars/bobbafeth-1.webp",
          img2:"/star-wars/bobbafeth-box.webp"
        },
        {
          serie: "STAR WARS",
          modelo: "Luke",
          descripcion: "Figura coleccionable de Luke - The Mandalorian saga, edicion limitada",
          precio: 2000,
          img: "/star-wars/luke-1.webp",
          alt:"/star-wars/luke-box  .webp"
        },
        {
          serie: "STAR WARS",
          modelo: "Stromtrooper lightsaber",
          descripcion: "Figura coleccionable de stormtrooper lightsaber - The mandalorian saga.",
          precio: 2000,
          img: "/star-wars/trooper-1.webp",
          img2:"/star-wars/trooper-box.webp"
        }  
  ],
  'harrypotter': [
      {
          serie: "HARRY POTTER",
          modelo: "Luna lovegood lion mask",
          descripcion: "Figura coleccionable de Luna lovegood de la película Harry potter.",
          precio: 2000,
          img: "/harry-potter/luna-1.webp",
          img2: "/harry-potter/luna-box.webp"
        },
        {
          serie: "HARRY POTTER",
          modelo: "Patronus de snape",
          descripcion: "Figura coleccionable Funko de patronus de snape de la película Harry potter.",
          precio: 2000,
          img: "/harry-potter/snape-patronus-1.webp",
          img2: "/harry-potter/snape-patronus-box.webp"
        },
        {
          serie: "HARRY POTTER",
          modelo: "Hermione",
          descripcion: "Figura coleccionable Funko de Hermione de la película Harry potter.",
          precio: 2000,
          img: "/harry-potter/Hermione-1.webp",
          img2: "/harry-potter/Hermione-box.webp"
        },
        {
          serie: "HARRY POTTER",
          modelo: "Harry Potter",
          descripcion: "Figura coleccionable Funko de Harry Potter de la película Harry potter.",
          precio: 2000,
          img: "/harry-potter/harry-1.webp",
          img2: "/harry-potter/harry-box.webp"
        }
  ],
  'pokemon' : [
      {
          serie: "POKEMON",
          modelo: "Pidgeotto",
          descripcion: "Figura coleccionable de Pidgeotto de la serie POKEMON.",
          precio: 2000,
          img: "/pokemon/pidgeotto-1.webp",
          img2: "/pokemon/pidgeotto-box.webp"
        },
        {
          serie: "POKEMON Indigo",
          modelo: "Vulpix",
          descripcion: "Figura coleccionable de Vulpix de la serie de Pokemón Indigo.",
          precio: 2000,
          img: "/pokemon/vulpix-1.webp",
          img2: "/pokemon/vulpix-box.webp",
        
        },
        {
          serie: "POKEMON Indigo",
          modelo: "Charmander",
          descripcion: "Figura coleccionable de Charmander de la serie de Pokemón Indigo.",
          precio: 2000,
          img: "/pokemon/charmander-1.webp",
          img2: "/pokemon/charmander-box.webp"
        },
        {
          serie: "POKEMON Indigo",
          modelo: "Dragonite",
          descripcion: "Figura coleccionable de Dragonite de la serie de Pokemón Indigo.",
          precio: 2000,
          img: "/pokemon/dragonite-1.webp",
          img2: "/pokemon/dragonite-box.webp"
        },
        {
          serie: "POKEMON Indigo",
          modelo: "Pikachu",
          descripcion: "Figura coleccionable de Pikachu de la serie de Pokemón Indigo.",
          precio: 2000,
          img: "/pokemon/pikachu-1.webp",
          img2: "/pokemon/pikachu-box.webp"
        }
  ]
}
//console.log(infoFunkos.starwars[1].precio);


/* next.addEventListener('click', (e) => {
  e.preventDefault();
  bandeja.innerHTML = "";
  crearHtml(infoFunkos.pokemon);
})

back.addEventListener('click', (e) => {
  e.preventDefault();
  bandeja.innerHTML = "";
  crearHtml(infoFunkos.starwars);
})
 */
btnBuscar.addEventListener('click', (e)=>{
  e.preventDefault();
  let buscar = input[0].value
  console.log(buscar);
})
  
  
 
for (const lista of orden) {
  console.log(lista.innerHTML);
}

setTimeout(() => {
  crearHtml(infoFunkos.harrypotter);
  crearHtml(infoFunkos.pokemon);
  crearHtml(infoFunkos.starwars);
}, 1000);

  
/* function guardarEnstorage(encontrado) {
  return localStorage.setItem('cart', JSON.stringify(encontrado))
}

function findQuimi(datos, filtro) {
  return datos.find((el) => el.nombre.includes(filtro));
} */