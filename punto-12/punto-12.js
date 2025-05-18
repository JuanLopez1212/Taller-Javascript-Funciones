function mejorEstudiante(listaEstudiantes) {
    if (listaEstudiantes.length === 0) {
        return null
    }

    let mejor = listaEstudiantes[0]

    for (let i = 1; i < listaEstudiantes.length; i++) {
        if (listaEstudiantes[i].nota > mejor.nota) {
            mejor = listaEstudiantes[i]
        }
    }

    return mejor.nombre
}

const estudiantes = [
    { nombre: "Juan", nota: 7.5 },
    { nombre: "Ana", nota: 8.5 },
    { nombre: "Pedro", nota: 6.0 },
    { nombre: "María", nota: 9.0 }
]

const mejor = mejorEstudiante(estudiantes)
console.log(mejor)