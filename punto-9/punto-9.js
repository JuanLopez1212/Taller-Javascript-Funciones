function combinarObjetos ( objeto1, objeto2 ) {
    return { ...objeto1, ...objeto2 }
}

const resultado = combinarObjetos ( { a: 1 }, { b: 2 })
console.log ( resultado )