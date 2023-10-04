export function filtradoFunko(arr, filtro) {
    let filtrado = arr.find((el) => {
        return el.modelo.includes(filtro);
    });
    return filtrado;
} 