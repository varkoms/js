// Ejercicios

// 1. Crea una funcion que reciba dos numeros y devuelva su suma
function sum(a, b) {
    return a + b
}

console.log(sum(10, 5)) // 15

// 2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos
function encontrarMayor(arr) {
    // Comprobar si el array esta vacio
    if (arr.length === 0) {
        return null
    }

    // Inicializamos la variable mayor con el primer elemento del array
    let mayor = arr[0]

    // Recorremos el array a partir del segundo elemento
    for (let i = 1; i < arr.length; i++) {
        // Si encontramos un numero mayor, lo actualizamos
        if (arr[i] > mayor) {
            mayor = arr[i]
        }
    }
    return mayor
}
const numeros = [1, 8, 7, 3, 2, 9]
console.log(encontrarMayor(numeros)) // 9

// 3. Crea una funcion que reciba un string y devuelva el numero de vocales que contiene
function devolverVocales(texto) {
    let contador = 0
    const vocales = "aeiouAEIOU"
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++
        }
    }

    return contador
}

console.log(`${devolverVocales("Cuantas vocales tengo")} vocales`) // 8 vocales

// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array con las strings en minusculas
function devolverMinusculas(arr) {
    const minusculas = []
    arr.forEach(str => {
        minusculas.push(str.toLowerCase())
    });
    return minusculas
}

const arrayStrings = ["Hola", "Mundo", "JavaScript", "Es", "Genial"]
const cadenasMinusculas = devolverMinusculas(arrayStrings)

console.log(cadenasMinusculas) // [ 'hola', 'mundo', 'javascript', 'es', 'genial' ]

// 5. Crea una funcion que reciba un numero y devuelva true si es primo y false en caso contrario
function esPrimo(num) {
    if (num < 2) return false // Numeros menores que 2 no son primos
    if (num == 2) return true // 2 es el unico numero primo par

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false // Si num no es divisible por i, no es primo
        }
    }

    return true // Si no encontramos divisores, num es primo
}

console.log(esPrimo(11)) // true
console.log(esPrimo(10)) // false
console.log(esPrimo(2))  // true
console.log(esPrimo(1))  // false

// 6. Crea una funcion que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function devolverIguales(arr1, arr2) {
    const iguales = []
    // Comparar cada elemento entre los arrays
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            // Si ambos elementos de los arrays, de la misma posicion son iguales.
            // entonces se agrega al nuevo array
            iguales.push(arr1[i])
        }
    }
    return iguales // Retornamos el nuevo array
}

const array1 = [10, 20, 30, 40, 50]
const array2 = [10, 25, 30, 40, 66, 70]
console.log(`Elementos iguales: ${devolverIguales(array1, array2)}`)

// 7. Crea una funcion que reciba un array de numeros y devuelva la suma de todos los numeros pares
function sumarNumerosPares(arr) {
    let suma = 0
    arr.forEach(number => {
        if (number % 2 == 0) {
            suma += number
        }
    })

    return suma
}

const numeros2 = [4, 8, 6, 3, 20, 9]
console.log(`La suma de los numeros pares es: ${sumarNumerosPares(numeros2)}`); // La suma de los numeros pares es: 38

// 8. Crea una funcion que reciba un array de numeros y devuelva un nuevo array con cada numero elevado al cuadrado
function elevarAlCuadrado(arr) {
    let square = []
    arr.forEach(number => {
        square.push(number * number)
    })

    return square
}

const numeros3 = [1, 3, 5, 7, 20, 25]
console.log(`Numeros elevados al cuadrado: ${elevarAlCuadrado(numeros3)}`); // Numeros elevados al cuadrado: 1,9,25,49,400,625

// 9. Crea una funcion que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirCadena(str) {
    let resultado = ''
    i = str.length - 1
    while (i >= 0) {
        resultado += str[i]
        i--
    }

    return resultado
}

let cadena = "Hola Mundo"
console.log(`${cadena} en orden inverso: ${invertirCadena(cadena)}`)

// 10. Crea una funcion que calcule el factorial de un numero dado.
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1 // El factorial de 0 o 1 siempre es 1
    }

    let resultado = 1
    for (let i = 2; i <= num; i++) {
        resultado *= i // Multiplicar por cada numero de 2 hasta n
    }

    return resultado
}

let n = 5
console.log(`El factorial de ${n} es: ${factorial(n)}`); // El factorial de 5 es: 120
