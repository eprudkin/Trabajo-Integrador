export function crearHtml(array) {
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
                <a href="item.html" class="card-text text-dark">ver</a>
                </div>
        </article>
              `;
              bandeja.innerHTML += html;
    }
  
  }

  export function baciarHtml() {
    let html = "";
  }