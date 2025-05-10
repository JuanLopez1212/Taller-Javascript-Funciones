const materiasDeJuan = [
    { nombreMateria: 'Programacion', notaFinal: 2 },
    { nombreMateria: 'Logica', notaFinal: 3.1 },
    { nombreMateria: 'Matematica', notaFinal: 1.0 },
    { nombreMateria: 'Algebra', notaFinal: 5.0 }
];

function promedioNotas (materiasDeJuan) {
    let sumaNotas = 0;
    let cantidadMaterias = 0;

    for (let i = 0; i < materiasDeJuan.length; i++) {
        sumaNotas += materiasDeJuan[i].notaFinal;
        cantidadMaterias++;
    }

    return sumaNotas / cantidadMaterias;
}

console.log(promedioNotas(materiasDeJuan));

