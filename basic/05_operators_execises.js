// Exercises
// 1. Crea una variable para cada operacion aritmetica
let suma = 5 + 10
let resta = 20 - 5
let multiplicar = 2 * 200
let dividir = 100 / 10
let modulo = 300 % 10
let exponente = 2 ** 30

// 2. Crea una variable para cada tipo de operacion de asignacion, que haga uso de las variables utilizadas para las operaciones aritmeticas
let masIgual = suma += 2
let menosIgual = resta -= 20
let multiplicarIgual = multiplicar *= 2
let dividirIgual = dividir /= 2
let moduloIgual = modulo %= 1
let exponenteIgual = exponente **= 1000

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion
console.log(10 > 1)
console.log(200 < 1000)
console.log(3.4011 >= 3.4010)
console.log(4.0 <= 4.5)
console.log("a" == "a")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log("a" === "b")
console.log(0 === false)
console.log(undefined === null)
console.log(0 != "0")
console.log(false !== false)

// 5. Utiliza el operador logico and
console.log(suma > 1 && resta < 10)

// 6. Utiliza el operador logico or
console.log(suma > 1 || resta != 10)

// 7. Combina ambos operadores logicos
console.log(suma > 1 || resta != 10 && multiplicar >= dividir)

// 8. Añade alguna negacion
console.log(!(suma > 1 || resta != 10 && multiplicar >= dividir))

// 9. Utiliza el operador ternario
isLogged = true
isLogged ? console.log("Bienvenido") : console.log("Inicia sesion")



// 10. Combina operadores aritmeticos, de comparacion y logicos.
