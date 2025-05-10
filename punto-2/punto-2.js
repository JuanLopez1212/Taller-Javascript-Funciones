const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = numeroMayor ( numeros )
console.log ( res )
function numeroMayor ( numeros ) {
    let mayor = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor
}