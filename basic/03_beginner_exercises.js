// 1. Escribe un comentario de una linea
// Lo acabo de hacer XD

// 2. Escribe un comentario en varias lineas
/*
Lorem ipsum dolor
The path of the righteous man
Generate a beautiful block comment
with JavaScript
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let email = `varko.code@varkode.com`
let age = 35 // Entero
let isStudent = true
let undefinedValue
let nullValue = null
let mySymbol = Symbol("mysymbol")
let myBigInt = BigInt(12903891208390128390812903812903890128390128390128390)

// 4. Imprime por consola el valor de todas las variables
console.log("=== VALUE OF EACH VARIABLE ===")
console.log(email)
console.log(age)
console.log(isStudent)
console.log(undefinedValue)
console.log(nullValue) // Object
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log("=== DATA TYPE OF EACH VARIABLE ===")
console.log(typeof email)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue) // Object
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuacion, modificar los valores de las variables por otros del mismo tipo
email = `varkoms@varkode.com`
age = 28
isStudent = false
mySymbol = Symbol("anotherSymbol")
myBigInt = 122131241228390128390128390n

// 7. A continuacion, modifica los valores de las variables por otros de distinto tipo
email = 40
age = null
isStudent = Symbol("this is a new symbol")
mySymbol = undefined
myBigInt = "soy un big int 19023890182903890218390 XD"
nullValue = false
isStudent = 129021390123901230912309123901239012390n

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myEmail = `varko.code@varkode.com`
const myAge = 35 // Entero
const isTeacher = true
const myUndefinedValue = undefined
const myNullValue = null
const myNewSymbol = Symbol("mysymbol")
const myBiggerBigInt = BigInt(12903891208390128390812903812903890128390128390128390123122321232123)

// 9. A continuacion, modifica los valores de las constantes
// HAHA, JOKES ON YOU. LAS CONSTANTES NO SE PUEDEN MODIFICAR

// 10. Comenta las lineas que produzcan algun tipo de error al ejecutarse
// Ninguna linea, mi codigo es perfecto
