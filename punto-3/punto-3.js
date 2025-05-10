const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = [];

const pares = numeros.filter ( ( value ) => {
    return value % 2 == 0
})

console.log ( pares )