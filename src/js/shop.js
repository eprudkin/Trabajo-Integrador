
document.title = "Shop | Funkoshop";
let productos = [
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
    img: "star-wars/trooper-1.webp",
    img2:"star-wars/trooper-box.webp"
  },
  {
    serie: "POKEMON",
    modelo: "Pidgeotto",
    descripcion: "Figura coleccionable de Pidgeotto de la serie POKEMON.",
    precio: 2000,
    img: "pokemon/pidgeotto-1.webp",
    img2: "pokemon/pidgeotto-box.webp"
  },
  {
    serie: "POKEMON Indigo",
    modelo: "Vulpix",
    descripcion: "Figura coleccionable de Vulpix de la serie de Pokemón Indigo.",
    precio: 2000,
    img: "pokemon/vulpix-1.webp",
    img2: "pokemon/vulpix-box.webp",
  
  },
  {
    serie: "POKEMON Indigo",
    modelo: "Charmander",
    descripcion: "Figura coleccionable de Charmander de la serie de Pokemón Indigo.",
    precio: 2000,
    img: "pokemon/charmander-1.webp",
    img2: "pokemon/charmander-box.webp"
  },
  {
    serie: "POKEMON Indigo",
    modelo: "Dragonite",
    descripcion: "Figura coleccionable de Dragonite de la serie de Pokemón Indigo.",
    precio: 2000,
    img: "pokemon/dragonite-1.webp",
    img2: "pokemon/dragonite-box.webp"
  },
  {
    serie: "POKEMON Indigo",
    modelo: "Pikachu",
    descripcion: "Figura coleccionable de Pikachu de la serie de Pokemón Indigo.",
    precio: 2000,
    img: "pokemon/pikachu-1.webp",
    img2: "pokemon/pikachu-box.webp"
  },
  {
    serie: "HARRY POTTER",
    modelo: "Luna lovegood lion mask",
    descripcion: "Figura coleccionable de Luna lovegood de la película Harry potter.",
    precio: 2000,
    img: "harry-potter/luna-1.webp",
    img2: "harry-potter/luna-box.webp"
  },
  {
    serie: "HARRY POTTER",
    modelo: "Patronus de snape",
    descripcion: "Figura coleccionable Funko de patronus de snape de la película Harry potter.",
    precio: 2000,
    img: "harry-potter/snape-patronus-1.webp",
    img2: "harry-potter/snape-patronus-box.webp"
  },
  {
    serie: "HARRY POTTER",
    modelo: "Hermione",
    descripcion: "Figura coleccionable Funko de Hermione de la película Harry potter.",
    precio: 2000,
    img: "harry-potter/Hermione-1.webp",
    img2: "harry-potter/Hermione-box.webp"
  },
  {
    serie: "HARRY POTTER",
    modelo: "Harry Potter",
    descripcion: "Figura coleccionable Funko de Harry Potter de la película Harry potter.",
    precio: 2000,
    img: "harry-potter/harry-1.webp",
    img2: "harry-potter/harry-box.webp"
  }
]


const contenedorD = document.getElementById('contenedorD');
console.log(contenedorD);


function crearHtml(array) {
  for (const item of array) {

    let html = "";
    //destructuring
    const { serie, modelo, descripcion, precio, img } = item;
    html =
      `
          <article class="card shadow-lg my-3">
          <picture class="card-img-top">
              <img src="../multimedia/${img}" alt="${descripcion}">
          </picture>
          <div class="card-body text-center">
              <p class="card-text text-bg-danger w-25">NUEVO</p>
              <H3 class="card-title">${modelo}</H3>
              <p class="card-subtitle text-body-secondary">${serie}</p>
              <p class="card-text">${precio}</p>
              <p class="card-text text-info">3 CUOTAS SIN INTERÉS</p>
              </div>
      </article>
            `;
    contenedorD.innerHTML += html;
  }

}


setTimeout(() => {
  crearHtml(productos);
  crearHtml(productos);
  crearHtml(productos);
  
}, 1000);

/* 'https://jsonplaceholder.typicode.com/posts/1' */

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos);
    /* crearHtml(datos); */
  })
/* 
    fetch('')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al recuperar el archivo JSON');
    }
    return response.json();
  })
  .then(datos => {
    console.log(datos);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
  async function fetchAPI() {
    const response=await fetch('../data/data.json');
    const datos=await response.json();

    console.log(datos);
  }
  fetchAPI()

  fetch('https://jsonplaceholder.typicode.com/posts/', {
    method:"POST",
    body:JSON.stringify({
        id:101,
        title:"POST DE PRUEBA",
        body:"HOLA SOY UN POST DE PRUEBA, ESTA ACCIÖN NO SE PUEDE REALIZAR SIN BACKEND",
    }),
    headers:{
        "content-type":"applicaction/json"
    }
}).then(res=>res.json())
.then(data=>{
    console.log(data);
})
    */