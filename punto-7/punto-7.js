const estudiantes = [
    { nombre: 'Juan', nota: 3.5},
    { nombre: 'Ana', nota: 4.5},
    { nombre: 'Luis', nota: 2.5},
    { nombre: 'Maria', nota: 4.0},
    { nombre: 'Pedro', nota: 3.0},
    { nombre: 'Laura', nota: 4.8},
    { nombre: 'Carlos', nota: 2.0},
    { nombre: 'Sofia', nota: 3.8},
    { nombre: 'Javier', nota: 4.2},
    { nombre: 'Lucia', nota: 3.9}
]

// const estudiantesAprobados = estudiantes.filter(estudiante => estudiante.nota >= 3.5);

// function mostrarEstudiantesAprobados(estudiantes) {
//     console.log("Estudiantes aprobados:");
//     estudiantes.forEach(estudiante => {
//         console.log(`Nombre: ${estudiante.nombre}, Nota: ${estudiante.nota}`);
//     });
// }
// mostrarEstudiantesAprobados(estudiantesAprobados);


function mostrarEstudiantesAprobados(estudiantes) {
    
        estudiantes
            .filter(estudiante => estudiante.nota >= 3.5)
            .forEach(estudiante => {  
                console.log(`Nombre: ${estudiante.nombre}, Nota: ${estudiante.nota}`);
            });
    }

mostrarEstudiantesAprobados(estudiantes);