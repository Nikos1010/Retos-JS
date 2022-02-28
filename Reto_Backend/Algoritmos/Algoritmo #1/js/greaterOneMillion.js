import { numberToWord } from "./numberToWord.js";

export function greaterOneMillion(number) {
  const million = parseInt(number / 1000000);
  let word = "";

  if (million <= 1000) {
    let greaterOneMillion = numberToWord(million);
    word = `${greaterOneMillion} million ${numberToWord(number % 1000000)}`;
  }
  return word;
}
