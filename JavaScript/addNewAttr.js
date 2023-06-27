// Tu reto es agregar y calcular una nueva propiedad llamada "taxes", 
// los impuestos deben ser del 19% con base al precio base y debes tener 
// en cuenta que como resultado se debe dejar un valor entero, sin decimales.

function addNewAttr(array){
    var contador = 0
    for (let value of array){
        let taxes = (value.price) * 0.19                // Multiplicamos por 019 equivalente al 19% del precio 
        array[contador]["taxes"] = Math.floor(taxes)    // Math.floor redondea hacia abajo el número almacenado en la variable taxes
        contador++
    }
    console.log(array)
}

addNewAttr([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 22
    },
    {
      name: "Product 3",
      price: 2050,
      stock: 15
    },
    {
      name: "Product 4",
      price: 4570,
      stock: 7
    }
    ])