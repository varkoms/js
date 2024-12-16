// Loops o bucles

// BUCLE WHILE
// Se ejecutara n veces mientras
// la condicion evaluada dentro
// del bucle sea false.

// Estructura basica de un bucle for
for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

// Recorrer un array usando for
const numbers = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// BUCLE WHILE
// Evaluarse antes de cada iteracion
// Mientras sea verdadera, el bucle continua

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++;
}

// Bucles infinitos
// while (true) {
//     // NO EJECUTAR
// }

// BUCLE DO-WHILE
// Este bucle se ejecuta
// AL MENOS UNA VEZ y evalua
// al final de cada iteracion
i = 6
do {
    console.log(`Hola ${i}`)
    i++;
} while (i < 5)

// BUCLE FOR-OF
// Recorrer valores de algun
// elemento que sea iterable
let myArray = [1, 2, 3, 4]
let mySet = new Set(["Brais", "Moure", "mouredev", 37, true, 'braismoure@mouredev.com'])
let myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myString = "Hola Javascript"

for (let value of myArray) {
    console.log(value)
}
for (let value of mySet) {
    console.log(value)
}
for (let value of myMap) {
    console.log(value)
}

// Un String se comporta
// como un listado de caracteres
// por ende, se puede recorrer sin problema
// con for-of
for (let value of myString) {
    console.log(value)
}

// Buenas Practicas
// 1. EVITA LOS BUCLES INFINITOS
// 2. USO DEL BREAK / CONTINUE

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 6) {
        break
    }
    console.log(`Hola ${i}`)
}
/*
skipea el 5
y no imprime el 6
Hola 0
Hola 1
Hola 2
Hola 3
Hola 4
*/
