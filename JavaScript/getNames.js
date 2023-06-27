// Retornar un array de strings con solo los nombres reciviendo desde un objeto 
function getNames(array){
    var names = []
    for (let n of array){
        names.push(n.name)
    }
    console.log(names)

}
getNames([
    {
      name: 'Benjamín',
      lastName: 'Molina',
      age: 28
    },
    {
      name: 'Valentina',
      lastName: 'Rodríguez',
      age: 19
    },
    {
      name: 'Pablo',
      lastName: 'Valenzuela',
      age: 21
    },
    ]
)