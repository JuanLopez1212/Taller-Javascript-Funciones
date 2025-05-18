function ordenarArray(array) {
    let n = array.length
    let intercambio

    do {
        intercambio = false
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                intercambio = true
            }
        }
        n--
    }
    while (intercambio)
    return array
}

let numeros = [5, 3, 8, 1, 2]
console.log ( ordenarArray ( numeros ))