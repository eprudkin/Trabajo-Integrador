document.title = "Shop | Funkoshop";
const contenedorD = document.getElementById('contenedorD');
console.log(contenedorD);
contenedorD.innerHTML= "<h1>Acá va la lista de articulos</h1>"


function crearHtml(array) {
    for (const item of array) {

        let html = "";
        //destructuring
        const {id, serie, modelo, descripcion, precio, img } = item;
        html =
            `
            <section class="card d-flex flex-md-row justify-content-around align-items-baseline">
            <picture class="card-img-top">
                <img src="../multimedia/${img}" alt="Figura funko de babyu yoda">
            </picture>
            <article class="card-body">
                <p class="card-text text-body-secondary">${serie}</p>
                <H2 class="card-title">${modelo}</H2>
                <p class="card-subtitle lead">${descripcion}</p>
                <p class="card-text">${precio}</p>
                <form action="" class="stock" method="get">
                    <label for="submit" name="submit"><button id="submit" class="btn btn-dark btn-group" type="submit">Agregar al Carrito</button></label>
                </form>
                <p class="card-text text-info">3 CUOTAS SIN INTERÉS</p>
                <a href="" class="text-decoration-none text-dark card-link">Ver metodos de pago</a>
            </article>
        </section>
              `;
        contenedor.innerHTML += html;
    }
    const arrayBotones = document.querySelectorAll(".btnAdd");
    console.log(arrayBotones);

    arrayBotones.forEach((btnAdd) => {
        btnAdd.addEventListener('click', (e) => {
            e.preventDefault();
            let add = datos.find((el) => el.simbolo == btnAdd.id);
            console.log(add);
            guaradarElemento(add);
            console.log(tablaSecundaria);
            guardarStorage(tablaSecundaria);
            Toastify({
                text: "Elemento agregado!!",
                duration: 3000,
                close: true,
                gravity: top,
                position: "rigth",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onclick: function () {
                    console.log("funciona");
                }
            }).showToast();


            //guaradarElemento(local);//quizas entre llaves y puntos, desparramando
            //concatenar arrays
        })
    })

}