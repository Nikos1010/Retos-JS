export function quantityLetters(letters) {
  const array = [];
  let count = 1;
  for (let i = 0; i < letters.length; i++) {
    if (
      letters[i] !== " " &&
      letters[i] !== "," &&
      letters[i] !== "." &&
      letters[i] !== "-" &&
      letters[i] !== "+" &&
      letters[i] !== "/" &&
      letters[i] !== "*"
    ) {
      if (letters[i] === letters[i + 1]) {
        count++;
      } else {
        array.push(`${letters[i]} => ${count}`);
        count = 1;
      }
    }
  }
  return array;
}
