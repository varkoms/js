// Funciones
// Bloque de código diseñado para realizar una tarea específica

function myFunc() {
    console.log('Hello, function!')
}

for (let i = 1; i <= 5; i++) {
    myFunc()
}

// Funcion con parametros
function funcWithParams(name) {
    console.log(`Hello, ${name}`)
}

funcWithParams('Varko')
funcWithParams('Wero')
funcWithParams('Chanchito Pelon')

// Funciones anonimas
// No tienen un nombre definido
// Se almacenan en variables y se ejecutan
// con el nombre de la variable asignada.
const saludar = function (name) {
    console.log(`Hello, ${name}`)
}

saludar('Tatia')

// Arrow functions
const arrowFunction = (name) => {
    console.log(`Hello, ${name}`)
}

// Variacion en una sola linea
const arrowFuncOneLine = (name) => console.log(`Hello, ${name}`)

arrowFunction('Arrow Function')
arrowFuncOneLine('Arrow Function with one line')

// Parametros
function sum(a, b) {
    console.log(a + b)
}

sum(5, 10) // 15
sum(5) // NaN
sum() // NaN

// Funciones con parametros por defecto
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum(5, 10) // 15
defaultSum(5) // 5
defaultSum() // 0

// Retorno de valores en funciones
function mult(a = 1, b = 2) {
    return a * b
}

console.log(mult(10, 5)) // 50
console.log(mult(10)) // 20
console.log(mult()) // 2

// Funciones Anidadas
function extern() {
    console.log('Funcion Externa')
    function intern() {
        console.log('Funcion Interna')
    }
    intern()
}

extern()
// Funcion Externa
// Funcion Interna

// Funciones de orden superior
function applyFunc(func, param) {
    func(param)
}

applyFunc(arrowFuncOneLine, 'Orden superior') // Hello, Orden Superior

// For Each
myArray = [1, 2, 3, 4]
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(value => console.log(value))
/*
1
2
3
4
*/
mySet.forEach(value => console.log(value))
/*
Brais
Moure
mouredev
37
true
braismoure@mouredev.com
*/
myMap.forEach(value => console.log(value))
/*
Brais
braismoure@mouredev.com
37
*/
