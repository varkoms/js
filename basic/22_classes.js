// Clases

class Persona {

    // Propiedades privadas
    #name
    #age
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    }

    set bank(newBank) {
        this.#bank = newBank
    }

    walk() {
        console.log("Puedo caminar!")
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }

    haveBirthday() {
        this.age += 1
        console.log(`Happy Birthday! You are now ${this.age} years old.`)
    }
}

// Creamos el objeto Persona
const varko = new Persona('CMS', 35, 'Varkode', "0000-0000-0000-0000")
console.log(typeof varko) // object

// Accediendo a las propiedades de la clase
console.log(varko.name) // CMS
console.log(varko.age) // 35
console.log(varko.alias) // Varkode

// Ejecutando metodos de la clase
varko.walk() // Puedo caminar!
varko.greet() // Hello, my name is CMS and I am 35 years old.

// Accediendo a propiedades privadas
// Error, #bank no es accesible desde fuera de la clase
// console.log(varko.#bank)

// Getters/Setters
varko.bank = "1111-1111-1111-1111"

// Herencia
class Animal {
    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("Animal emite un sonido generico")
    }
}

class Dog extends Animal {
    run() {
        console.log("El perro corre")
    }

    sound() {
        console.log('Barf')

    }
}

class Fish extends Animal {
    constructor(name, size) {
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }
}

let max = new Dog("Max")
max.run() // El perro corre
max.sound() // Barf

let fatality = new Fish("Fatality", 10)
fatality.swim() // El pez nada
fatality.sound() // Animal emite un sonido generico

// Metodos estaticos
class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(10, 20)) // 30

