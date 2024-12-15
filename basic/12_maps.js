// ESTRUCTURAS DE DATOS
// Maps

// Declaracion
let myMap = new Map()
console.log(myMap) // Map(0) {}

// Inicializacion

myMap = new Map([
    ["name", "Cesar"],
    ["surname", "Varko"],
    ["email", "varkode@gmail.com"],
    ["edad", 37],
    ["job_name", "Backend Developer (Trainee)"]
])

console.log(myMap)
/*
Map(5) {
  'name' => 'Cesar',
  'surname' => 'Varko',
  'email' => 'varkode@gmail.com',
  'edad' => 37,
  'job_name' => 'Backend Developer (Trainee)'
}
*/

// METODOS Y PROPIEDADES
// Set

// Agrega o actualiza un elemento
myMap.set("isWorking", true)

console.log(myMap)
/*
Map(6) {
  'name' => 'Cesar',
  'surname' => 'Varko',
  'email' => 'varkode@gmail.com',
  'edad' => 37,
  'job_name' => 'Backend Developer (Trainee)',
  'isWorking' => true --> nuevo elemento agregado
}
*/

// Puedo actualizar un valor ya existente
myMap.set("edad", 35)

console.log(myMap)
/*
Map(6) {
  'name' => 'Cesar',
  'surname' => 'Varko',
  'email' => 'varkode@gmail.com',
  'edad' => 35, --> Valor actualizado
  'job_name' => 'Backend Developer (Trainee)',
  'isWorking' => true
}
*/

/*
Este comportamiento es parecido a los sets, la diferencia es
que NO PUEDEN HABER ELEMENTOS REPETIDOS EN CLAVE, PERO SI
EN VALOR, es decir, si la clave NO EXISTE, agrega
ese elemento, en caso contrario, actualiza su valor.
*/

// get
// Sirve para recuperar un valor

console.log(myMap.get("name")) // "Cesar"
console.log(myMap.get("surname")) // "Varko"
console.log(myMap.get("apellidos")) // undefined - el elemento buscado no existe

// has
// Permite comprobar si un elemento existe en el mapa

console.log(myMap.has("edad")) // true
console.log(myMap.has("job_name")) // true
console.log(myMap.has("apellidos")) // false

// delete
// Agrego un elemento antes
myMap.set("animal", "chanchito")
console.log(myMap)
/*
Map(7) {
  'name' => 'Cesar',
  'surname' => 'Varko',
  'email' => 'varkode@gmail.com',
  'edad' => 35,
  'job_name' => 'Backend Developer (Trainee)',
  'isWorking' => true,
  'animal' => 'chanchito' --> Elemento agregado
}
*/

myMap.delete("animal")
console.log(myMap)
/*
-- ELEMENTO "animal" YA NO EXISTE
Map(6) {
  'name' => 'Cesar',
  'surname' => 'Varko',
  'email' => 'varkode@gmail.com',
  'edad' => 35,
  'job_name' => 'Backend Developer (Trainee)',
  'isWorking' => true
}
*/

/*
El metodo delete()
devuelve true si un elemento del mapa
existio y ha sido eliminado, false en caso contrario
*/
console.log(myMap.delete("animal")) // devuelve false, ya que la clave "animal" ya no existe

// Propiedades
console.log(myMap.keys()) // Muestra todas las claves del mapa
/*
Map Iterator] {
  'name',
  'surname',
  'email',
  'edad',
  'job_name',
  'isWorking'
}
*/

console.log(myMap.values()) // Imprime los valores del mapa
/*
[Map Iterator] {
  'Cesar',
  'Varko',
  'varkode@gmail.com',
  35,
  'Backend Developer (Trainee)',
  true
}
*/

console.log(myMap.size) // Tamaño del mapa, imprime 6

// Borrar un mapa - clear
myMap.clear()
// console.log(myMap) // Map(0) {}

