// Exportacion de modulos
export function add(a, b) {
    return a + b
}

export default function substract(a, b) {
    return a - b
}

// Propiedades
export const PI = 3.1416
export let name = "Varko"

// classes
export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}
