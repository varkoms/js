const rupiasEnCofres = [10, 15, 20, 25];

function calcularNumeroAleatorioEntre(min, max) {
  // Calcula la diferencia entre el máximo y el mínimo
  let diferencia = max - min;

  // Genera un número aleatorio entre 0 y la diferencia
  let numeroAleatorio = Math.random() * diferencia;

  // Añade el mínimo para desplazar el número dentro del rango deseado
  numeroAleatorio += min;

  // Redondea el número al entero más cercano
  numeroAleatorio = Math.round(numeroAleatorio);

  // Retorna el número aleatorio
  return numeroAleatorio;
}

function abrirCofreDeRupias() {
  const numeroAleatorio = calcularNumeroAleatorioEntre(0, 3);
  const rupiasObtenidas = rupiasEnCofres[numeroAleatorio];
  return rupiasObtenidas;
}

console.log(`Link encontró ${abrirCofreDeRupias()} rupias`);
