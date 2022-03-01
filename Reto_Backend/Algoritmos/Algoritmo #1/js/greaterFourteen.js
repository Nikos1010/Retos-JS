import { greaterOneHundred } from "./greaterOneHundred.js";
import { numberToWord } from "./numberToWord.js";

export function greaterFourteen(number) {
  const teen = parseInt(number / 10);
  let word = "";
  if (teen === 1 && number !== 15) {
    word = numberToWord(number % 10) + "teen";
  } else if (teen === 2) {
    word = "Twenty " + numberToWord(number % 20);
  } else if (teen === 3) {
    word = "Thirty " + numberToWord(number % 30);
  } else if (teen === 4) {
    word = "Forty " + numberToWord(number % 40);
  } else if (teen === 5) {
    word = "Fifty  " + numberToWord(number % 50);
  } else if (teen === 6) {
    word = "Sixty " + numberToWord(number % 60);
  } else if (teen === 7) {
    word = "Seventy " + numberToWord(number % 70);
  } else if (teen === 8) {
    word = "Eighty " + numberToWord(number % 80);
  } else if (teen === 9) {
    word = "Ninety " + numberToWord(number % 90);
  } else {
    word = greaterOneHundred(number);
  }
  return word;
}
