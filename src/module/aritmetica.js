export const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};
export const restar = (...args) => {
    return args.reduce((a, b) => a - b, 0);
};
export const dividir = (a, b) => a/b;

export const multiplicar = (a, b) => a * b;