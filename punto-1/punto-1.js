const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let value = numeros.reduce ( ( prev, reduce ) => {
    return prev + reduce
} )

console.log ( value )