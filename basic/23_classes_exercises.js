// Exercises

// 1. Crea una clase que reciba dos propiedades
// 2. Agrega un metodo a la clase que utilice las propiedades
// 3. Muestra los valores de las propiedades e invoca a la funcion
// 4. Agrega un metodo estatico a la primera clase
// 5. Haz uso del metodo estatico
// 6. Crea una clase que haga uso de herencia
// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas
// 9. Utiliza los get y set y muestra sus valores
// 10. Sobrescribe un metodo de una clase que utilice herencia.

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static eat() {
        console.log(`Humano come`)
    }

    mostrarPropiedades() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Hombre extends Human {
    #height
    constructor(name, age, height) {
        super(name, age)
        this.#height = height
    }

    get height() {
        return this.#height
    }

    set height(height) {
        this.#height = height
    }

    mostrarPropiedades() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Height: ${this.height}`);
    }

}

let humano = new Human("Varko", 30)
humano.mostrarPropiedades() // Name: Varko, Age: 30
Human.eat() // Human come

let varko = new Hombre('Varko', 35, 1.80)
console.log(varko.height) // 1.8
varko.mostrarPropiedades() // Name: Varko, Age: 35, Height: 1.8

