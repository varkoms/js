// ESTRUCTURA DE DATOS
// Sets

// Declaracion
let mySet = new Set()
console.log(mySet) // Set(0) {}

// Inicializacion
mySet = new Set(["Varko", "Backend Developer", 35, true, "varkodev@gmail.com"])

console.log(mySet) // Set(5) { 'Varko', 'Backend Developer', 35, true, 'varkodev@gmail.com' }

// METODOS COMUNES

//Add y Delete
mySet.add("Chanchito Feliz")
console.log(mySet) // Agrega el elemento "chanchito feliz" al final del set
/*
Set(6) {
    'Varko',
    'Backend Developer',
    35,
    true,
    'varkodev@gmail.com',
    'Chanchito Feliz'
  }
*/

mySet.delete("Chanchito Feliz") // // Elimina el valor 'Chanchito Feliz'. Para borrar elementos, se tiene que indicar el valor del elemento que queremos borrar.
console.log(mySet) // Set(5) { 'Varko', 'Backend Developer', 35, true, 'varkodev@gmail.com' }

// Recibe el valor que queremos borrar y ademas, devuelve true o false si el elemento fue borrado o no.
console.log(mySet.delete("Varko")) // true
console.log(mySet) // Set(4) { 'Backend Developer', 35, true, 'varkodev@gmail.com' }

// Has
mySet = new Set(["Varko", "Backend Developer", 35, true, "varkodev@gmail.com"])

console.log(mySet) // Set(5) { 'Varko', 'Backend Developer', 35, true, 'varkodev@gmail.com' }

console.log(mySet.has("Gato feliz")) // Retorna un booleano si un elemento con el valor especificado existe dentro del set. En este caso devuelve false

// Size
// Devuelve el tamaño de un set
console.log(mySet.size) // 5

// Array.from
// Convertir un set a Array
let myArray = Array.from(mySet) // Crea un nuevo array a partir de un objeto iterable
console.log(myArray) // [ 'Varko', 'Backend Developer', 35, true, 'varkodev@gmail.com' ]

// Ahora hacer la inversa
mySet = new Set(myArray)
console.log(mySet) // // Set(5) { 'Varko', 'Backend Developer', 35, true, 'varkodev@gmail.com' }

// DIFERENCIA PALPABLE ENTRE ARRAY Y SET

// UN SET NO PERMITE ELEMENTOS DUPLICADOS, UN ARRAY SI

// Set original
console.log(mySet) // // Set(5) { 'Varko', 'Backend Developer', 35, true, 'varkodev@gmail.com' }

// Intentamos agregamos un elemento repetido
mySet.add('Backend Developer')

// El set NO lo agregará porque YA EXISTE dentro del set, por lo tanto, imprime los valores del set original
console.log(mySet) // // Set(5) { 'Varko', 'Backend Developer', 35, true, 'varkodev@gmail.com' }

// Pero, si el elemento es ligeramente distinto al que ya existe, si lo permite agregar
mySet.add('backend Developer')
console.log(mySet) // // Set(6) { 'Varko', 'Backend Developer', 35, true, 'varkodev@gmail.com', 'backend Developer'}
