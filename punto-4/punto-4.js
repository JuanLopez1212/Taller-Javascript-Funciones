const frutas = [ 'Manzana', 'Pera', 'Naranja']

function invertirArray ( frutas ) {
    let arrayInvertido = []
    for ( let i = frutas.length - 1; i >= 0; i-- ) {
        arrayInvertido.push( frutas[i] )
    }
    return arrayInvertido
}

console.log( invertirArray( frutas ) )
console.log ( frutas )

