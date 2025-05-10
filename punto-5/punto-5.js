const frutas = [ 'Pera', 'Manzana', 'Naranja', 'Sandía', 'Melón' ];
const buscar = 'Sandía'

const resultado = frutas.find ( ( frutas ) => {
    return frutas == buscar 
} );

console.log ( resultado )