const palabras = [
  "fdnsvionsvios1",
  "fdnsvfdagvbionscafcascacsscvdvbfsbsvios2",
  "fdnbdfbfnfdnfgsvidonsvios3",
  "fdhfbmhvionsvasfasfios4",
  "fdnsvionsviogvadvbcascsfdbbnsgdbdfnklsdvjanvs5",
  "fdnsvifdbbnsgdcabdfnklsdvjanvs6",
  "fdanvcascsas7",
];
const parabolaObj = [];
const parabolaObj2 = [];

function parabola() {
  for (let i = 0; i < palabras.length; i++) {
    parabolaObj.push(palabras[i].length);
  }
  parabolaObj.sort((a, b) => a - b);
  let i = 0;
  let b = 0;
  let c = 0;
  let a = palabras.length - 1;
  while (i < palabras.length) {
    if (parabolaObj[b] === palabras[i].length) {
      if (b % 2 === 0) {
        parabolaObj2[c] = palabras[i];
        c++;
      } else {
        parabolaObj2[a] = palabras[i];
        a--;
      }
      b++;
      i = 0;
    } else {
      i++;
    }
  }
  return parabolaObj2;
}

const pensamientoRoto = parabola();
console.log(pensamientoRoto);
