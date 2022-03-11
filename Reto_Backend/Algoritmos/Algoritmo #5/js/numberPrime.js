export function numberPrime(prime) {
  let type, cont;
  const number = Number(prime);
  if (number === 1) {
    type = `${prime} isn't prime`;
  } else {
    cont = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        cont++;
        if (cont > 2) {
          type = `${prime} isn't prime`;
          return type;
        }
      }
    }
  }
  if (cont < 3) {
    type = `${prime} is prime`;
  }
  return type;
}
