// Tienes un array de objetos que representan órdenes de compra con los siguientes atributos:

// customerName: string
// total: number
// delivered: boolean
// Tu reto es retornar la suma total de todas las órdenes de compra

function calcTotal(orders) {
    const ordenes = orders.length
    const precios = []
    for (let i = 0; i < ordenes; i++) {
        precios.push(orders[i].total)
    }
    let salida = 0
    precios.forEach(function(suma){
        salida += suma 
    })
    return salida
}

console.log ( calcTotal(
    [
        {
            customerName: "Nicolas",
            total: 100,
            delivered: true,
        },
        {
            customerName: "Zulema",
            total: 120,
            delivered: false,
        },
        {
            customerName: "Santiago",
            total: 20,
            delivered: false,
        }
    ]
))  