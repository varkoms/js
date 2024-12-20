// Metodos de Consola

// log
console.log('Adios JavaScript')

// error
console.error('Este es un mensaje de error')
console.error('Error al conectarse a una base de datos', new Error('Conexion fallida'))

// warn
console.warn('Mensaje de advertencia')

// info
console.info('Esto es un mensaje de informacion adicional')

// table
let data = [
    { name: "Brais", age: 37 },
    { name: "Sara", age: 29 }
]

const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
}
console.table(data)
/*
┌─────────┬─────────┬─────┐
│ (index) │ name    │ age │
├─────────┼─────────┼─────┤
│ 0       │ 'Brais' │ 37  │
│ 1       │ 'Sara'  │ 29  │
└─────────┴─────────┴─────┘
*/
console.table(persona)
/*
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ nombre  │ 'Juan'   │
│ edad    │ 30       │
│ ciudad  │ 'Madrid' │
└─────────┴──────────┘
*/

// group
console.group("Usuarios")
console.log("Nombre: Brais")
console.log("Edad: 37")
console.groupEnd()

console.log("Log generico")

// time
console.time("Tiempo de ejecucion")
for (let i = 0; i < 1000000; i++) {

}
console.timeEnd("Tiempo de ejecucion")

console.time("Tiempo de ejecucion 2")
for (let i = 0; i < 1000000; i++) {

}

console.timeEnd("Tiempo de ejecucion 2")

// assert
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace
function funcA() {
    funcB()
}

function funcB() {
    console.trace("Seguimiento de la ejecucion")
}

funcA()

// clear
// console.clear() // Limpia la consola
