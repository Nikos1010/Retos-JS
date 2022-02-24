export function separarNumero(numeroMayor) {
  const arregloNumero = [];
  for (let i = 0; i < numeroMayor.length; i++) {
    arregloNumero.push(Number(numeroMayor[i]));
  }
  return arregloNumero;
}
