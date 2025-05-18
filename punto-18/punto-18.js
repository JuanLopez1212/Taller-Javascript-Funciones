function contarVocales ( texto ) {
    let coincidencias = texto.match ( /[aeiouAEIOU]/g )
    return coincidencias ? coincidencias.length : 0
}

console.log ( contarVocales ( "Hola Mundo" ) ) 
console.log ( contarVocales ( "Murciélago" ) ) 
console.log ( contarVocales ( "xyz" ) )