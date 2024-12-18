// Objetos

// Todo lo que NO es un dato primitivo
// es un objeto

// CARACTERISTICAS
// Sintaxis

let person = {
    "name": "Varko",
    "age": 35,
    "email": "varkoms@varkodev.com"
}

// Acceder a sus propiedades

// Notacion punto (recomendada)
console.log(person.name) // Varko

// Notacion corchete
console.log(person["name"]) // Varko

// Modificacion de propiedades
person.name = "Brais"
console.log(person.name) // Brais
console.log(typeof person.age) //number
person.age = "37" // Cambiamos el tipo de dato, no su valor
console.log(typeof person.age) //string

// Eliminar propiedades
// Usando delete()
delete (person.age)
console.log(person) // { name: 'Brais', email: 'varkoms@varkodev.com' }

// Agregar nuevas propiedades
// y actualizar propiedades existentes
person.age = 35
person.name = "Varko"
console.log(person) // { name: 'Varko', email: 'varkoms@varkodev.com', age: 35 }

// Metodos (funciones)
// A los objetos pueden agregarse
// funciones (metodos) como propiedades
// y ser invocadas para realizar dicha funcion
let perro = {
    name: "Max",
    age: 7,
    alias: "El Mex",
    walk: () => console.log("Max camina!")
}

perro.walk() // Max camina!

// Anidacion de objetos
let osa = {
    name: "Tatia",
    age: 35,
    alias: "Osa",
    eat: () => console.log('I love pizza!'),
    job: {
        name: 'Project Manager',
        experience: 5,
        work: function () {
            console.log(`${osa.name} dice: 'Como ${this.name} he trabajado por ${this.experience} años'`)
        }
    }
}

console.log(osa)
/*
{
  name: 'Tatia',
  age: 35,
  alias: 'Osa',
  eat: [Function: eat],
  job: { name: 'Project Manager', experience: '5 years' }
}
*/

// Ejecutar metodo eat
osa.eat() // I love pizza!

// Acceder al objeto interno
console.log(osa.job) // { name: 'Project Manager', experience: '5 years' }

// Acceder al nombre del empleo
console.log(osa.job.name) // "Project Manager"

// Accediendo al metodo del objeto 'job'
osa.job.work() // Tatia says: 'I love my job!'

// Igualdad de objetos

// redefinimos person
person = {
    "name": "Varko",
    "age": 35,
    "email": "varkoms@varkodev.com"
}

let person2 = {
    "name": "Varko",
    "age": 35,
    "email": "varkoms@varkodev.com"
}

// Ambos objetos tienen la misma estructura e informacion
// PERO...
console.log(person)
console.log(person2)

// Los objetos NO son iguales
console.log(person == person2) // false
console.log(person === person2) // false

// En realidad estamos comparando
// las direcciones de memoria, en este caso
// las direcciones de memoria de ambos objetos
// NO son iguales.

// Pero en cambio, si comparamos propiedades
// de ambos objetos, aqui SI son iguales.
console.log(person.email === person2.email) // true

// Iterar objetos
for (let key in osa) {
    console.log(key + ": " + osa[key])
}

// Functions como objetos
// Esto normalmente se usa en 'clases'
// como funcion 'constructora'
function Person(name, age) {
    this.name = name
    this.age = age
}

let varko = new Person('Varko', 35)
let tatia = new Person('Tatia', 35)
let max = new Person('Max', 7)

console.log(typeof varko) // object
console.log(typeof tatia) // object
console.log(typeof max) // object
