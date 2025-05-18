function eliminarDuplicados ( array ) {
    return [ ...new Set( array )]
}

const resultado = eliminarDuplicados( [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ] )
console.log( resultado )