function validarContraseña ( contraseña ) {
    if ( contraseña.length < 8 ) {
        return false;
    }

    if ( !/[A-Z]/.test( contraseña ) ) {
        return false;
    }

    if ( !/[0-9]/.test( contraseña ) ) {
        return false;
    }

    return true 
}

console.log ( validarContraseña ( "Hola1234" ))
console.log ( validarContraseña ( "hola1234" ))
console.log ( validarContraseña ( "HolaHola" ))
console.log ( validarContraseña ( "H1" ))