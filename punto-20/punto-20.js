function totalCarrito ( carrito ) {
    let total = 0 

    for ( let item of carrito ) {
        let descuento = item.descuento || 0
        let precioFinal = item.precio * ( 1 - descuento )
        total += precioFinal * item.cantidad 
    }

    return total 
}

const carrito = [
    { nombre: "Camiseta", precio: 20000, cantidad: 2, descuento: 0.1 },
    { nombre: "Pantalón", precio: 30000, cantidad: 1, descuento: 0 },
    { nombre: "Zapatos", precio: 50000, cantidad: 1, descuento: 0.2 }
]

console.log ( totalCarrito ( carrito ))