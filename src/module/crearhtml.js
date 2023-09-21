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
export function crearCart(array) {
  for (const itemList of array) {

    let html = "";
    //destructuring
    const { serie, modelo, descripcion, precio, img } = itemList;
    html = `
  <article class="col-sm-12 col-md-12 col-lg-12 bg-light d-flex flex-row align-items-center rounded-5 my-2">
  <picture class="col-sm-1 col-md-2 col-lg-4">
      <img src="../multimedia/${img}" alt="" class="w-100">
  </picture>
  <div class="card-body col-sm-8 col-md-4 col-lg-6">
      <p>${serie}</p>
      <h4 class="card-title">${modelo}</h4>
      <p class="card-subtitle text-truncate">${descripcion}</p>
      <p class="card-text text-primary">${precio}</p>
  </div>
  <div class="btn-group-vertical col-sm-2 col-md-2 col-lg-2">
      <button id="buy" class="btn text-primary">Pagar</button>
      <button id="eliminar" class="btn text-danger">Eliminar</button>
  </div>
</article>
`;
    bandeja.innerHTML += html;
  }

}