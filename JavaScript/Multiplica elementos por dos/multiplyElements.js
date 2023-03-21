// Multiplicar los valores de una lista de array numérico por dos
function multiplyElements(array){
    var lista = []
    for (let value of array){
        var mult = value * 2
        lista.push(mult)
    }
    console.log(lista)
}

multiplyElements([1,2,3,4,5,6])