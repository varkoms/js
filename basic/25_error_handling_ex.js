// Exercises

// 1. Crea un bucle que intente transformar a float cada valor y capture/muestre los errores
const values = ["10.5", "abc", "20.3", "xyz", "30.1"];

for (const value of values) {
    try {
        const floatValue = parseFloat(value);
        if (isNaN(floatValue)) {
            throw new Error(`No se puede convertir '${value}' a float`);
        }
        console.log(`'${value}' convertido a float: ${floatValue}`);
    } catch (error) {
        console.error(error.message);
    }
}

// 2. Crea una funcion que verifique si un objeto tiene una propiedad especifica y lance una excepcion personal
function validarPropiedad(obj, propiedad) {
    if (!obj.hasOwnProperty(propiedad)) {
        throw new Error(`Propiedad '${propiedad}' no encontrada en objeto`);
    }
    return true;
}

// Ejemplo de uso:
const myObject = { name: "John", age: 30 };

try {
    validarPropiedad(myObject, "name"); // No error
    validarPropiedad(myObject, "address"); // Lanza el error
} catch (error) {
    console.error(error.message);
}

// 3. Crea una funcion que realice reintentos en caso de error hasta un maximo de 10
function reintentarOperacion(operacion, intentosMaximos) {
    let intentos = 0;
    while (intentos < intentosMaximos) {
        try {
            return operacion();
        } catch (error) {
            intentos++;
            if (intentos >= intentosMaximos) {
                throw new Error(`Operacion fallida despues de ${intentosMaximos} intentos: ${error.message}`);
            }
        }
    }
}

// Ejemplo de uso:
function unreliableOperation() {
    if (Math.random() < 0.7) {
        throw new Error("Random failure");
    }
    return "Success";
}

try {
    const result = reintentarOperacion(unreliableOperation, 10);
    console.log(result);
} catch (error) {
    console.error(error.message);
}
