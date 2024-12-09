// Condicionales

// if, else if, else

let age = 40

// if (si)
if (age == 37) {
    console.log("La edad es 37")
}

// else (si no)
if (age == 37) {
    console.log("La edad es 37")
} else {
    console.log("la edad no es 37")
}

// Else if (si no, si)
if (age == 37) {
    console.log("La edad es 37")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("la edad no es 37 ni es menor de edad")
}

// Operador ternario
const message = (age == 37) ? "La edad es 37" : "La edad NO es 37"
console.log(message)

// switch
/*
NOTA: Solo usar en caso de que
sea necesario validar UNA SOLA
VARIABLE, cuyo valor sea distinto.

Para multiples variables usar
if/else
*/

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        console.log("Opcion invalida")
}

console.log(dayName)

