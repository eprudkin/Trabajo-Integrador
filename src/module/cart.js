import {  infoFunkos } from './shop.js'
import { crearHtml } from './crearhtml.js'

document.title = "Cart | Funkoshop";

const bandeja = document.getElementById('bandeja');



/* function crearHtml(array) {
    for (const item of array) {
  
      let html = "";
      //destructuring
      const {id , modelo, descripcion, precio, img } = item;
      html =
        `
       
        <div class="card shadow-lg my-3" style="width: 18rem;">
        <img src="../multimedia${img}" class="card-img-top" alt="${descripcion}">
        <div class="card-body">
            <h5 class="card-title text-center">${modelo}</h5>
            <p class="card-text">${descripcion}</p>
            <p class="card-text text-info">$${precio}</p>
            <a href="#" id="${id}" class="btn btn-primary">Eliminar</a>
        </div>
    </div>
              `;
      bandeja.innerHTML += html;
    }
  
} */

setTimeout(() => {
  crearHtml(infoFunkos.harrypotter);
  crearHtml(infoFunkos.pokemon);
  crearHtml(infoFunkos.starwars);
  crearHtml(infoFunkos.harrypotter);
  crearHtml(infoFunkos.starwars);
}, 3000);


