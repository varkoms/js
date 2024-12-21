// Importar modulos

import { add, PI, name, Circle } from './modules.js'

/*
No es necesario usar el nombre del metodo exportado.
Se puede usar cualquier nombre
*/
import resta from './modules.js'

console.log(add(1, 2)) // 3
console.log(add(5, 10)) // 15
console.log(add(3, 5)) // 8
console.log(add(0, 0)) // 0

// Usando propiedades exportadas
console.log(PI * 2) // 6.2832
console.log(name) // Varko

// Usando metodos exportados por default
console.log(resta(10, 5)) // 5 (substract)

// Usando clases exportadas
let circle = new Circle(5)
console.log(circle.radius) // 5
console.log(circle.area().toFixed(2)) // 78.54
console.log(circle.perimeter().toFixed(2)) // 31.42
