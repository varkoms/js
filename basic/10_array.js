// ESTRUCTURAS DE DATOS
// Array

// Formas de declarar un array
let myArray = []
let myArray2 = new Array()

console.log(myArray) // []
console.log(myArray2) // []

// Inicializando arrays
myArray = [3]
myArray2 = new Array(3)

console.log(myArray) // [ 3 ]
console.log(myArray2) // [ <3 empty item> ]

/*
[ <3 empty items> ]
Esto significa que el array solo reserva 3 espacios
vacios listos para ser rellenados.
*/

// Inicializando arrays con mas valores
myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray) // [1, 2, 3, 4]

// Para este caso, myArray2 ahora tiene una lista de numeros en lugar de espacios
console.log(myArray2) // [1, 2, 3, 4]

// Usando valores de cadenas de texto en lugar de numeros
myArray = ["Varko", "Dev", "backend"]
myArray2 = new Array("Varko", "Dev", "backend")

console.log(myArray) // ["Varko", "Dev", "backend"]
console.log(myArray2) // ["Varko", "Dev", "backend"]

// Usando diferentes datos primitivos
myArray = ["Varko", "Dev", "backend", 35, true]
myArray2 = new Array("Varko", "Dev", "backend", 35, true)

console.log(myArray) // [ 'Varko', 'Dev', 'backend', 35, true ]
console.log(myArray2) // [ 'Varko', 'Dev', 'backend', 35, true ]

// Se demuestra que las listas son ordenada
myArray2 = new Array(3)
myArray2[0] = "Varko"
myArray2[1] = "Dev"
myArray2[2] = "Developer"
console.log(myArray2) // [ 'Varko', 'Dev', 'Developer' ]

// METODOS COMUNES
// push() y pop()
myArray = []

// Push
// Agrega elementos al final del array
myArray.push("Varko")
myArray.push("Developer")
myArray.push("JavaScript")
myArray.push(35)

console.log(myArray) // [ 'Varko', 'Developer', 'JavaScript', 35]

// Pop
// Elimina el ultimo elemento del array y lo devuelve.
let lastElement = myArray.pop()
console.log(lastElement) // 35
console.log(myArray) // [ 'Varko', 'Developer', 'JavaScript']

// Shift / Unshift

// Shift
let firstElement = myArray.shift() // Elimina el primer elemento del array y lo devuelve
console.log(firstElement) // "Varko"
console.log(myArray) // [ 'Developer', 'JavaScript' ]

// Unshift
let newLength = myArray.unshift("Varko", 'Backend Developer') // Inserta uno o mas elementos al inicio del array y devuelve el nuevo tamaño del array
console.log(newLength) // 4
console.log(myArray) // ['Varko', 'Backend Developer', 'Developer', 'JavaScript' ]

// Length
// Retorna la longitud actual de un array
console.log(myArray.length) // 4

// COMO "ELIMINAR" EL CONTENIDO DE UN ARRAY
// Inicializando de nuevo el array
myArray = []
console.log(myArray) // []

// Definir su longitud en 0
myArray.length = 0 // Alternativa, no se recomienda usar
console.log(myArray) // []

// OTROS METODOS
// Slice
myArray = ["Varko", 35, "Backend Developer", "Chanchito feliz"]
console.log(myArray) // [ 'Varko', 35, 'Backend Developer', 'Chanchito feliz' ]

let myNewArray = myArray.slice(2) // Devuelve una copia superficial de una seccion de un array. En este caso devolvera los elementos a partir del index 2 en adelante
console.log(myNewArray) // ["Backend Developer", "Chanchito feliz"]

// Es posible indicar desde donde queremos copiar
console.log(myArray) // [ 'Varko', 35, 'Backend Developer', 'Chanchito feliz' ]
myNewArray = myArray.slice(1, 3) // Desde la posicion 1 a la posicion 3
console.log(myNewArray) // [ 35, 'Backend Developer' ]

// Splice
// Elimina los elementos basado en el/los indice(s) indicados.
myArray = ["Varko", 35, "Backend Developer", true, "Chanchito feliz"]
console.log(myArray) // [ 'Varko', 35, 'Backend Developer', true , "chanchito feliz"]
myArray.splice(1, 3) // Eliminara de "myArray" los elementos desde el indice 1 hasta el indice 3.
console.log(myArray) // ['Varko', "Chanchito feliz"]

myArray = ["Varko", 35, "Backend Developer", true, "Chanchito feliz"]
console.log(myArray) // [ 'Varko', 35, 'Backend Developer', true , "chanchito feliz"]
myArray.splice(1, 2, "nueva entrada") // Con un tercer parametro, podemos eliminar desde indice 1 hasta indice 2 y, a partir de alli, agregar un nuevo elemento llamado "nueva entrada"
console.log(myArray) // [ 'Varko', 'nueva entrada', true, 'Chanchito feliz' ]
