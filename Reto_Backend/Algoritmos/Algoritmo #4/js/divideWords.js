export function divide(words) {
  const arrayLetter = [];
  for (let i = 0; i < words.length; i++) {
    arrayLetter.push(words[i].toUpperCase());
  }
  return arrayLetter;
}
