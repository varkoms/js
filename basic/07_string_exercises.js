// 1. Concatena dos cadenas de texto
console.log("Hola " + "coders!")

// 2. Muestra la longitud de una cadena de texto
let cadena = "Hola soy una cadena de texto"
console.log("El tamaño de mi cadena es: " + cadena.length)

// 3. Muestra el primer y ultimo caracter de un string
let word = "Macbook Air M2 rocks"
console.log(word[0], word[word.length - 1])

// 4. Convierte a MAYUSCULAS y minusculas un string
let convert = "Amo aprender Javascript"
console.log(convert.toUpperCase())
console.log(convert.toLowerCase())

// 5. Crea una cadena de texto en varias lineas
console.log(`Hola
    esto es un texto
    en multiples lineas
    de texto. Javascript
    es demasiado potente`)

// 6. Interpola el valor de una variable en un string
let plumbus = "plumbus"
console.log(`Para crear el "${plumbus}" hay que hacer un proceso enorme!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let unTexto = "Este texto tiene espacios en blanco que seran reemplazados por guiones"
console.log(unTexto.split(' ').join('-'))
// console.log(unTexto.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let guess = "La palabra que buscamos existe en este texto"
console.log(guess.includes("existe"))

// 9. Comprueba si dos strings son iguales
let string1 = "HOLA"
let string2 = "Hola"
console.log(string1 == string2)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(string1.length == string2.length)
