// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los numeros del 1 al 20
let n = 1
while (n <= 20) {
    console.log(`Numero: ${n}`)
    n++
}
// 2. Crea un bucle que sume todos los numeros del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i
}

console.log(`La suma de los numeros del 1 al 100 es: ${suma}`)

// 3. Crea un bucle que imprima todos los numeros pares entre 1 y 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`Numero par: ${i}`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en consola
const names = ['Varko', 'Lady Artemixa', 'Dano', 'Sebas']
for (const name of names) {
    console.log(name)
}

// 5. Escribe un bucle que cuenta el numero de vocales en una cadena de texto
let texto = "Murcielago"
const vocales = "aeiouAEIOU"
let contador = 0
for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        contador++;
    }
}

console.log(`El numero de vocales es: ${contador}`)

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto.
let numeros = [2, 3, 4, 5, 10, 45]
let i = 0
let producto = 1
while (i < numeros.length) {
    producto *= numeros[i]
    i++
}

console.log(`Total: ${producto}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 3
const tabla = 3
for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena = "Hola Mundo"
let resultado = ''
i = cadena.length - 1
while (i >= 0) {
    resultado += cadena[i]
    i--
}

console.log(`Cadena invertida: ${resultado}`)

// 9. Usa un bucle para generar los primeros 10 numeros de la secuencia de fibonacci
let fibonacci = [0, 1]
let cantidad = 10
for (let i = 2; i < cantidad; i++) {
    let next = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(next)
}

console.log(`Fibonacci: ${fibonacci}`)

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10
let arrayNumbers = [100, 1, 200, 2, 365, 3, 4000, 4, 482, 5, 728, 6, 10, 11]
resultado = []
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > 10) {
        resultado.push(arrayNumbers[i])
    }
}

console.log(`Array de numeros mayores a 10: ${resultado}`)


