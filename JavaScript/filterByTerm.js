//Crea un buscador que retorne palabras de acuerdo parámetro de búsqueda

//Tu reto es retornar un array solo con las palabras que cumplan con la 
//condición de tener un término de búsqueda dado.

//Solución de reto

function filterByTerm(array, term) {
    const salida = []
    for (let i = 0; i < array.length; i++) {

        let cadenaArray = array[i]

        if (cadenaArray.includes(term)) {
            salida.push(array[i])
        }
    }
    return salida
}

const array = ["ana", "santi", "nico", "anastasia"]
const term = "ana"


console.log(filterByTerm(array, term))
