function contarPropiedades ( objeto ) {
    return Object.keys (objeto).length 
}

const propiedad = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Bogotá",
    profesion: "Ingeniera",
    activo: true 
}

const resultado = contarPropiedades (propiedad)
console.log ( resultado )