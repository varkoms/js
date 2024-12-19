// Manejo de Errores
try {
    // Código que puede lanzar una excepción
    let result = someFunction()
    console.log(result)
} catch (error) {
    // Código para manejar la excepción
    console.error('Se produjo un error:', error.message) // Se produjo un error: someFunction is not defined
} finally {
    // Código que siempre se ejecuta, haya o no excepción
    console.log('Bloque finally ejecutado'); // Bloque finally ejecutado
}

// Lanzamiento de errores
function checkNumber(num) {
    if (isNaN(num)) {
        throw new Error('El argumento no es un número');
    }
    return num;
}

try {
    checkNumber('abc');
} catch (error) {
    console.error('Error capturado:', error.message); // Error capturado: El argumento no es un número
} finally {
    console.log('Bloque finally ejecutado'); // Bloque finally ejecutado
}

// Errores personalizables
class ArgumentError extends Error {
    constructor(message) {
        super(message)
        this.name = "ArgumentError"
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message)
        this.name = "CalculationError"
    }
}
class SumZeroIntegerError extends Error {
    constructor(message) {
        super(message)
        this.name = "SumZeroIntegerError"
    }
}

/* Funcion que suma dos numeros enteros unicamente */
function sumarEnteros(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new ArgumentError('Ambos argumentos deben ser números enteros');
    }
    if (a < 0 || b < 0) {
        throw new CalculationError('Los argumentos deben de ser numeros enteros positivos')
    }
    if (a == 0 && b == 0) {
        throw new SumZeroIntegerError('Ambos argumentos deben ser mayores a cero')
    }
    return a + b;
}

try {
    let suma = sumarEnteros(0, 0);
    console.log('La suma es:', suma); // La suma es: 15
} catch (error) {
    if (error instanceof ArgumentError) {
        console.error('Error de argumento: ', error.message)
    } else if (error instanceof CalculationError) {
        console.error('Error de Calculo: ', error.message)
    } else if (error instanceof SumZeroIntegerError) {
        console.error('Error: ', error.message)
    } else {
        console.error('Error capturado:', error.message);
    }
} finally {
    console.log('Bloque finally ejecutado'); // Bloque finally ejecutado
}
