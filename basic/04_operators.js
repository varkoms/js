// Operators

// Operadores Artimeticos
let a = 5
let b = 10
console.log(a + b) // Suma
console.log(a - b) // Restar
console.log(a * b) // Multiplicar
console.log(a / b) // Dividir

console.log(a % b) // Modulo
console.log(a ** b) // Exponente

// Incremento
a++
console.log(a)

// Decremento
b--
console.log(b)

// Operadores de Asignacion
let myVariable = 100
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
console.log(myVariable)

myVariable *= 2
console.log(myVariable)

myVariable /= 2
console.log(myVariable)

myVariable %= 2
console.log(myVariable)

myVariable **= 2
console.log(myVariable)

// Operaciones de Comparacion
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == "6") // Igualdad por valor
console.log(a === "6")  // Igualdad por identidad (tipo Y valor)
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false) // true
console.log(1 == false) // false
console.log(2 == false)
console.log(0 == "") // true
console.log(0 == " ") // true
console.log(0 == '') // true
console.log(0 == "Hola") // false
console.log(0 === "") // false
console.log(0 === " ") // false
console.log(0 === '') // false
console.log(undefined == null) // true
console.log(undefined === null) // false

// Truthy Values (Valores Verdaderos)
// Todos los numeros positivos y negativos excepto el cero
// Todas las cadenas de texto menos las vacias
// El boolean true

// Falsy values (Valores falsos)
// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacias

// Operadores Logicos
// and (&&)
console.log((5 > 10) && (15 > 20)) // false
console.log((5 < 10) && (15 < 20)) // true
console.log((5 < 10) && (15 > 20)) // false
console.log(5 > 10 && 15 > 20 && 30 > 40) // false

// or (||)
console.log((5 > 10) || (15 > 20)) // false
console.log((5 < 10) || (15 < 20)) // true
console.log((5 < 10) || (15 > 20)) // true
console.log(5 > 10 && 15 > 20 && 30 > 40) // false

// Combinando and y or
console.log(5 > 10 && 15 > 20 || 30 < 40) // false

// not (!)
console.log(!true) // false
console.log(!false) // true
console.log(!(5 > 10 && 15 > 20)) // true
console.log(!(5 > 10 || 15 > 20)) // true

// Operador Ternario
const isRaining = true

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo") // Esta lloviendo

