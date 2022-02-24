import { volverString } from "./volverString.js";

export function mayorAMenor(mayores) {
  const arregloMayor = mayores.sort((a, b) => b - a);
  const mayor = volverString(arregloMayor);
  return mayor;
}

export function menorAMayor(menores) {
  const arregloMenor = menores.sort((a, b) => a - b);
  const menor = volverString(arregloMenor);
  return menor;
}
