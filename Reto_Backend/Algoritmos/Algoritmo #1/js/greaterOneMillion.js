import { numberToWord } from "./numberToWord.js";
import { showAlert } from "./showAlert.js";

export function greaterOneMillion(number) {
  const million = parseInt(number / 1000000);
  let word = "";

  if (million <= 100) {
    let greaterOneMillion = numberToWord(million);
    word = `${greaterOneMillion} million ${numberToWord(number % 1000000)}`;
  }
  return word;
}
