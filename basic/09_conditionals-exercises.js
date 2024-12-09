// Exercises

// 1. Imprime por consola tu nombre si una condicion toma su valor
let myName
if (myName) {
    console.log(`$Mi nombre es {myName}`)
} else {
    console.log("Error: Ingresa tu nombre")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con los establecidos
let username = "varko"
let pwd = "password1"

if (username == "usuario" && pwd == "password") {
    console.log("Acceso concedido")
} else {
    console.log("Acceso denegado")
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje
let number = -1
if (number > 0) {
    console.log("Es positivo")
} else if (number < 0) {
    console.log("Es negativo")
} else {
    console.log("Es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan
let edad = 30
let mayoriaEdad = 18
if (edad >= mayoriaEdad) {
    console.log("El ciudadano puede votar!")
} else {
    let years = mayoriaEdad - edad
    let plural = (years == 1) ? "año" : "años"
    console.log(`El ciudadano NO puede votar, le falta(n) ${years} ${plural}`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de su edad
let humanAge = 11
const human = (humanAge >= 18) ? "adulto" : "menor"
console.log(human)

// 6. Muestra en que estacion del año nos encontramos dependiendo de una variable "mes"
let month = 2
if (month >= 3 && month <= 5) {
    console.log("Estamos en primavera")
} else if (month >= 6 && month <= 8) {
    console.log("Estamos en verano")
} else if (month >= 9 && month <= 11) {
    console.log("Estamos en otoño")
} else {
    console.log("Estamos en invierno")
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior
if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log(`Tiene 31 dias`)
} else if (month == 2) {
    console.log(`Tiene 28 dias (29 si es año bisiesto)`)
} else {
    console.log(`Tiene 30 dias`)
}

// 8. Una un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "Frances"

switch (language) {
    case 'Español':
        console.log("Hola")
        break
    case 'Ingles':
        console.log("Hello")
        break
    case 'Aleman':
        console.log('Guten Tag')
        break
    case 'Portugues':
        console.log("Olá")
        break
    case 'Frances':
        console.log("Salut")
        break
    case 'Italiano':
        console.log("Ciao")
        break
    default:
        console.log('Idioma desconocido')
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Invierno")
        break;

    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break

    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break

    case 9:
    case 10:
    case 11:
        console.log("Otoño")
        break

    default:
        console.log("Mes no valido")
        break
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tiene 31 dias")
        break

    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Tiene 30 dias")
        break

    case 2:
        console.log("Tiene 28 dias (29 si es bisiesto)")
        break
    default:
        console.log("Mes no valido")
        break
}
