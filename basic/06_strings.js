// Strings
let myName = "Varko"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length) // 12

// Acceso a caracteres
console.log(greeting[0]) // 'H'
console.log(greeting[1]) // 'o'
console.log(greeting[12]) // undefined
console.log(greeting[11]) // '!'

// Metodos comunes
console.log(greeting.toUpperCase()) // HOLA, VARKO!
console.log(greeting.toLowerCase()) // hola, varko!
console.log(greeting.indexOf("Varko")) // 6
console.log(greeting.indexOf("Hola")) // 0
console.log(greeting.indexOf("chanchito")) // -1
console.log(greeting.includes("Varko")) // true
console.log(greeting.includes("Hola")) // true
console.log(greeting.includes("chanchito")) // false
console.log(greeting.slice(0, 10)) // Hola, Vark
console.log(greeting.slice(6, 11)) // Varko
console.log(greeting.replace("Varko", "ChanchitoDev")) // Hola, ChanchitoDev!

// Template literals (Plantillas literales)
/*
Sirven para interpolar variables y/o crear
strings de varias lineas
*/

let message = `Hola, este es mi
curso de
Javascript!`
console.log(message)
/*
Hola, este es mi
curso de
Javascript!
*/

let email = "varkode@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}`) // Hola, Varko! Tu email es varkode@gmail.com
