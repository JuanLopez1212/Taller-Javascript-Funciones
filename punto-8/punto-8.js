function agregarPropiedad ( objeto, clave, valor ) {
    objeto[clave] = valor 
    return objeto 
}

const persona = { nombre: "Juan" }
const resultado = agregarPropiedad( persona, "edad", 25)
console.log ( resultado )