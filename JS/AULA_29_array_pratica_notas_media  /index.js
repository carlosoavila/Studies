let array_valores = new Array(2, 7, 4, 8, 6, 1, 5, 3)
console.log(array_valores)

//console.log(array_valores.sort()) //Array ordenado

// Funcão para ordenação do array

function ordenar_array(itens) {
    let tamanho = itens.length //tamaho do array
    for(let i = 0; i < tamanho; i++) {
        for(let j = 0; j < tamanho; j++) {
            if(itens[j] > itens[j + 1]) {
                let auxiliar = itens[j]
                itens[j] = itens[j + 1]
                itens[j + 1] = auxiliar
            }
        }
    }
}

ordenar_array(array_valores)
console.log(array_valores)