// Exercises

// 1. Usa destructuracion para extraer los dos primeros elementos de un array
const array = [1, 2, 3, 4, 5];
const [first, second] = array;
console.log(first, second); // 1 2

// 2. Usa destructuracion en un array y asigna un valor predeterminado a una variable
const [a, b, c = 10] = [1, 2];
console.log(a, b, c); // 1 2 10

// 3. Usa destructuracion para extraer dos propiedades de un objeto
const person = { newName: 'Alice', newAge: 25, newCity: 'Barcelona' };
const { newName, newAge } = person;
console.log(newName, newAge); // Alice 25

// 4. Usa destructuracion para extraer dos propiedades de un objeto y asignalas a nuevas variables con nombres diferentes
const { newName: aNewName, newAge: aNewAge } = person;
console.log(aNewName, aNewAge); // Alice 25

// 5. Usa destructuracion para extraer dos propiedades de un objeto anidado
const nestedObject = {
    user: {
        details: {
            name: 'Bob',
            age: 40
        },
        location: {
            city: 'Madrid',
            country: 'Spain'
        }
    }
}

const { user: { location: { city: newCity, country: newCountry } } } = nestedObject;
console.log(newCity, newCountry); // Madrid Spain

// 6. Usa propagacion para combinar dos arrays en uno nuevo
const array1 = [1, 2, 3]
const array2 = [4, 5]
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5]

// 7. Usa propagacion para crear una copia de un array
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3, 4, 5]

// 8. Usa propagacion para combinar dos objetos en uno nuevo
const object1 = { a: 1, b: 2 };
const object2 = { c: 3, d: 4 };
const combinedObject = { ...object1, ...object2 };
console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }

// 9. Usa propagacion para crear una copia de un objeto
const copiedObject = { ...combinedObject };
console.log(copiedObject) // { a: 1, b: 2, c: 3, d: 4 }

// 10. Combina destructuracion y propagacion

const newyorker = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}

const { name, ...rest } = newyorker
const newNewyorker = { name: 'Jane', ...rest }

console.log(newNewyorker)
/*
{
  name: 'Jane',
  age: 30,
  address: { city: 'New York', country: 'USA' }
}
*/
