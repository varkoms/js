// Exercises

// 1. Crea una funcion que utilice console.error correctamente
function logError(message) {
    console.error("Error: " + message);
}

logError('Prueba de error')

// 2. Crea una funcion que utilice console.warn correctamente
function logWarning(message) {
    console.warn("Advertencia: " + message);
}

logWarning('Prueba de advertencia')

// 3. Crea una funcion que utilice console.info correctamente
function logInfo(message) {
    console.info("Info: " + message);
}

logInfo('Prueba de información')

// 4. Utiliza console.table con un ejemplo
const estudiantes = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 23 }
];

console.table(estudiantes);

// 5. Utiliza console.group en un ejemplo
console.group('Detalles Estudiante');
console.log('Name: Alice');
console.log('Age: 20');
console.groupEnd();

console.group('Detalles Estudiante');
console.log('Name: Bob');
console.log('Age: 22');
console.groupEnd();

console.group('Detalles Estudiante');
console.log('Name: Charlie');
console.log('Age: 23');
console.groupEnd();

// 6. Utiliza console.time en un ejemplo
console.time('Medir loop');
for (let i = 0; i < 1000000; i++) {
    // Some code to measure
    Math.sqrt(i);
}
console.timeEnd('Medir loop');

// 7. Valida con console.assert si un numero es positivo
function assertPositiveNumber(number) {
    console.assert(number > 0, 'El numero no es positivo');
}

assertPositiveNumber(5);  // No output
assertPositiveNumber(-3); // Assertion failed: El numero no es positivo

// 8. Utiliza console.count con un ejemplo
function countFunctionCalls() {
    console.count('Funcion llamada');
}

countFunctionCalls();
countFunctionCalls();
countFunctionCalls();

// 9. Utiliza console.trace con un ejemplo
function traceFunction() {
    console.trace('Trace de la funcion llamada');
}

function callTraceFunction() {
    traceFunction();
}

callTraceFunction();

// 10. Limpia la consola con clear
// console.clear() // Descomentar para limpiar la consola al final
