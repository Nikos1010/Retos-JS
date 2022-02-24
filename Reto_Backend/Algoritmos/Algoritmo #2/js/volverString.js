export function volverString(numero) {
  let acomodacion = "";
  for (let i = 0; i < numero.length; i++) {
    acomodacion += String(numero[i]);
  }
  return acomodacion;
}
