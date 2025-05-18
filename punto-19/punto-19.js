function calcularImpuestos ( salarios, tasa ) {
    return salarios.map ( salario => salario * tasa)
}

console.log ( calcularImpuestos ( [ 1000, 2000], 0.1))
console.log ( calcularImpuestos ( [ 500, 1500, 3000], 0.2))
