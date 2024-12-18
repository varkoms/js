// Ejercicios

// 1. Crea un objeto con 3 propiedades
let varko = {
    myName: "Varko",
    myAge: 35,
    myEmail: 'varkoms@varkodev.com'
}

console.log(varko) // { myName: 'Varko', myAge: 35, myEmail: 'varkoms@varkodev.com' }

// 2. Accede y muestra su valor
console.log(varko.myName) // Varko
console.log(varko.myAge) // 37
console.log(varko.myEmail) // varkoms@varkodev.com

// 3. Agrega una nueva propiedad
varko.gender = "Male"
console.log(varko)
/*
{
  myName: 'Varko',
  myAge: 35,
  myEmail: 'varkoms@varkodev.com',
  gender: 'Male'
}
*/

// 4. Elimina una de las 3 primeras propiedades
delete (varko.myAge)
console.log(varko) // { myName: 'Varko', myEmail: 'varkoms@varkodev.com', gender: 'Male' }

// 5. Agrega una funcion e invocala
varko.showFood = function (food) {
    return `I love ${food}`
}

console.log(varko.showFood('pizza')) // I love pizza

// 6. Itera las propiedades del objeto
for (let propiedad in varko) {
    console.log(`${propiedad}: ${varko[propiedad]}`)
}

/*
myName: Varko
myEmail: varkoms@varkodev.com
gender: Male
showFood: function (food) {
    return `I love ${food}`
}
*/

// 7. Crea un objeto anidado
varko.socialMedia = {
    facebook: 'facebook.com/varkoms',
    github: 'github.com/varkoms',
    instagram: 'instagram.com/varkoms',
    twitter: 'twitter.com/varkoms'
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(varko.socialMedia)

// 9. Comprueba si dos objetos creados son iguales
let tatia = {
    myName: "Tatia",
    myAge: 35,
    myEmail: 'tatiaup@varkodev.com',
    gender: "Female",
    showFood: function (food) {
        return `I love ${food}`
    }
}

console.log(varko === tatia) // false

// 10. Comprueba si dos propiedades diferentes son iguales.

console.log(varko.gender === tatia.gender) // false
