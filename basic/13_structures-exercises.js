// STRUCTURES EXERCISES

// 1. Crea un array que almacene cinco animales
let animales = ['Perro', 'Gato', 'Perico', 'Elefante', 'Leon']
console.log(animales)

// 2. Agrega dos animales mas. Uno al principio y otro al final del array
animales.unshift('Pajaro') // Al principio
animales.push('Cerdo') // Al final
console.log(animales)

// 3. Elimina el que se encuentra en tercera posicion
animales.splice(2, 1)
console.log(animales)

// 4. Crea un set que almacene cinco libros
let libros = new Set(['Don Quijote de la Mancha', 'Odisea', 'El Principito', 'El Señor de los Anillos', 'Historia de dos ciudades'])
console.log(libros)

// 5. Agrega dos mas. Uno de ellos repetido.
libros.add('El Código Da Vinci')
libros.add('El Principito')
console.log(libros)

// 6. Elimina uno concreto a tu eleccion
libros.delete('Odisea')
console.log(libros)

// 7. Crea un mapa que asocie el numero del mes a su nombre
let months = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(months)

// 8. Comprueba si el mes numero 5 existe en el mapa e imprime su valor
console.log(months.has(5)) // true
console.log(months.get(5)) // Mayo

// 9. Agrega al mapa una clave con un array que almacene los meses del verano
let mesesVerano = ["Junio", "Julio", 'Agosto']
months.set('verano', mesesVerano)
console.log(months)

// 10. Crea un array, transformalo a un set y almacenalo en un Map.
let anArray = [1, 2, true, false, "this is a test"]
console.log(anArray)
let aNewSet = new Set(anArray)
console.log(aNewSet)
let map = new Map()
map.set('Value', aNewSet)
console.log(map)
