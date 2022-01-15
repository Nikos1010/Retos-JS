"use strict";
/*Use Case/Problem
Typescript
Node
Aws
Azure
Lo que se busca en este juego es crear unos carros y posicionarlo en una pista (cada carro tiene un conductor), puede existir tantos carros como carriles, cada pista deberá tener el mismo límite de distancia (kilómetros) para el recorrido del carro, los carros avanzan de forma aleatoria aumentado su distancia por medio de metros (los kilómetros de debe convertir a metros para que el avance sea en metros) Cada avance debe existir un dado (de 1 a 6) que permite mover el carro y se debe multiplicar por 100, donde si se tira el dado y sacas 5 entonces debería ser 5*100 = 500 metros de recorrido. Al final debe existir un podio donde se clasifique primer, segundo y tercer ganador.
Funcionalidades
● Configurar Juego: Crear juego con jugadores, el juego debe tener los limites de
kilómetros por cada pista (un jugador puede ser un conductor y un conductor debe tener un carro asociado y un carro debe estar asociado a un carril que a su vez debe estar en una pista)
● Iniciar el juego: iniciar con un identificado del juego, se debe tener la lista de carros en donde se pueda iterar y avanzar según la posición de la pista o carril, esto debe ser de forma aleatoria (por medio del dado).
● Asignar podio (fin del juego): Se debe seleccionar primer, segundo y tercer lugar en la medida que los carros llegan a la meta (asignar al podio).
● Guardar datos: Se debe persistir los resultados con los nombres de los conductores en la posición del podio y agregar un contador de las veces que ha ganado.
*/
//Crear carros (un carro tiene un conductor y un carril)
//Variables
const carro1 = new jugador("Nicolas", 1); //9.8    //10.3 //3
const carro2 = new jugador("Karol", 2); //10 //1
const carro3 = new jugador("Carlos", 3);
const carro4 = new jugador("Uver", 4); //7.5
const carro5 = new jugador("Juan", 5); //9.9     //4
const carro6 = new jugador("Laura", 6); //10.2 //2

let jugadores = [carro1, carro2, carro3, carro4, carro5, carro6];
let puestoPodio = [];
const distanceKm = 10;

vecesRecorrerPista(3);
console.log(puestoPodio);

//Funciones
function jugador(piloto, carril) {
  (this.piloto = piloto),
    (this.carril = carril),
    (this.distancia = 0),
    (this.puesto = 0);
}

function recorrerPista() {
  let contadorPodio = 0;
  while (contadorPodio !== jugadores.length && contadorPodio < 3) {
    jugadores.forEach(function (jugador) {
      jugador.distancia += ((Math.trunc(Math.random() * 6) + 1) * 100) / 1000;
      if (
        jugador.puesto === 0 &&
        contadorPodio < 3 &&
        jugador.distancia > distanceKm
      ) {
        contadorPodio += 1;
        jugador.puesto = contadorPodio;
        podio(`Puesto N° ${contadorPodio}: ${jugador.piloto}`);
      }
    });
  }
}

//Para repetir la carrera las veces que quieran
function vecesRecorrerPista(e) {
  for (let i = 1; i <= e; i++) {
    recorrerPista();
    limpiarArreglo();
  }
}

function podio(e) {
  puestoPodio.push(e);
}

function limpiarArreglo() {
  jugadores.forEach(function (jugador) {
    jugador.distancia = 0;
    jugador.puesto = 0;
  });
}

//Demas procedimientos

// const nombramiento = function () {
//   for (let i = 0; i < pilots.length; i++) {
//     cars.push(`Este carro pertenece a ${pilots[i]}`);
//     let aleato = (Math.trunc(Math.random() * 6) + 1) * 100;
//     pistas.push(aleato);
//   }
// };
// nombramiento();

// let j = 0;
// let c = 1;
// while (pistas[j] <= distanceM) {
//   if (pistas[j + 1] >= distanceM) {
//     puestos.push(`El puesto N° ${cont + 1} es para ${pilots[j + 1]}`);
//     cont++;
//     while (pistas[j] >= distanceM && c === 1) {
//       j++;
//       if (j === 5) {
//         j = 0;
//       } else if (cont === 5) {
//         cont = 6;
//       }
//     }
//   }
//   let p = (Math.trunc(Math.random() * 6) + 1) * 100;
//   pistas[j] += p;
//   j++;
//   if (j === pistas.length - 1) {
//     j = 0;
//   }
// }

// console.log(cars, pistas, puestos);

/*Si un jugador gana entonces debe seguir el segundo puesto*/
/*
// Calcular la Serie fibonacci
// 1+1 += 2 += 3
const arrayFibo = [];
const fibonacci = function (limite) {
  let a = 1;
  let b = 2;
  let c;
  let i = 1;
  arrayFibo[0] = a;
  while (a <= limite) {
    arrayFibo[i] = a;
    c = a + b;
    a = b;
    b = c;
    i++;
  }
  return arrayFibo;
};

const serie = fibonacci(50);
console.log(serie);

// Numero Primo
const numPrimo = function (num) {
  if (num === 1) {
    console.log(`${num} no es primo`);
  } else {
    let cont = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        cont++;
        if (cont > 2) {
          i = num;
          console.log(`El ${num} no es primo`);
        }
      }
    }
    if (cont < 3) {
      console.log(`El ${num} es primo`);
    }
  }
};

numPrimo(4);
// Numero Factorial
const factorial = function (num) {
  let fac = 1;
  let i = 1;
  while (i <= num) {
    fac *= i;
    i++;
  }
  return fac;
};

const primerFactorial = factorial(4);
console.log(`El factorial es ${primerFactorial}`);*/
/*
// Sumatoria de multiplos de 5
//pedir un numero  -  si el numero es mayor de 5 sumarlo hasta llegar a este ej: 10 = 5+10 = 15
const multiplosCinco = function (num) {
  let sum = 0;
  let i = 5;
  while (i <= num) {
    sum += i;
    i += 5;
  }
  return sum;
};
const sumasDeCinco = multiplosCinco(24);
console.log(sumasDeCinco);*/
