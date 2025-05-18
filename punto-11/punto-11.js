function calcularRectangulo ( ancho, alto ) {
    const area = ancho * alto
    const perimetro = 2 * ( ancho + alto )

    return {
        area: area,
        perimetro: perimetro
    }
}

const resultado = calcularRectangulo ( 3, 4 )
console.log ( resultado )