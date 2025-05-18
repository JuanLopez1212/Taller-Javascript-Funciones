function factorial ( n ) {
    if ( n < 0 ) return undefined

    let resultado = 1
    for (let i = 1; i <= n; i++) {
        resultado *= i
    }
    return resultado
}

console.log ( factorial ( 5 ))
console.log ( factorial ( 0 ))
console.log ( factorial ( 1 ))
console.log ( factorial ( -3 ))