myArray = [1, 2, 3, 4]

let person = {
    name: "Varko",
    age: 35,
    email: "varko@varkodev.com"
}

// Destructuracion
// Extraer valores y asignarlos
// a variables de manera concisa.
// usando una unica definicion

// sintaxis en arrays
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0) // 1
console.log(myValue1) // 2
console.log(myValue2) // 3
console.log(myValue3) // 4
console.log(myValue4) // undefined

// sintaxis arrays con valores predeterminados

let [myValue5, myValue6, myValue7, myValue8, myValue9 = 0] = myArray
console.log(myValue5) // 1
console.log(myValue6) // 2
console.log(myValue7) // 3
console.log(myValue8) // 4
console.log(myValue9) // 0

// Ignorar elementos array
let [myValue10, , , myValue11] = myArray
console.log(myValue10) // 1
console.log(myValue11) // 4

// sintaxis objetos
let { name: myName, age: myAge, email: myEmail } = person;
console.log(myName) // Varko
console.log(myAge) // 35
console.log(myEmail) // varko@varkodev.com

// Desestructuración de objetos con valores predeterminados
let { name: myNewName = "Default Name", age: myNewAge = 0, email: myNewEmail = "default@example.com", phone: myPhone = "000-000-0000" } = person;
console.log(myNewName) // Varko
console.log(myNewAge) // 35
console.log(myNewEmail) // varko@varkodev.com
console.log(myPhone) // 000-000-0000

let osa = {
    name: "Tatia",
    age: 35,
    alias: "Osa",
    eat: () => console.log('I love pizza!'),
    job: {
        name: 'Project Manager',
        experience: 5,
        work: () => {
            console.log(`${osa.name} dice: 'Como ${osa.job.name} he trabajado por ${osa.job.experience} años'`)
        }
    }
}

let { name: osaName, age: osaAge, alias: osaAlias, eat: osaEat, job: { name: jobName, experience: jobExperience, work: jobWork } } = osa;

console.log(osaName); // Tatia
console.log(osaAge); // 35
console.log(osaAlias); // Osa
osaEat(); // I love pizza!
console.log(jobName); // Project Manager
console.log(jobExperience); // 5
jobWork() // Tatia dice: 'Como Project Manager he trabajado por 5 años'

// Propagacion

// Propagacion de arrays
let newArray = [...myArray, 5, 6, 7];
console.log(newArray); // [1, 2, 3, 4, 5, 6, 7]

let myCombinedArray = [...myArray, ...newArray]
console.log(myCombinedArray) // [ 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7 ]

// Propagacion de objetos
let newPerson = { ...person, phone: "123-456-7890" };
console.log(newPerson);
// { name: 'Varko', age: 35, email: 'varko@varkodev.com', phone: '123-456-7890' }
