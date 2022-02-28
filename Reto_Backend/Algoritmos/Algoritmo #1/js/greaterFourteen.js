import { greaterOneHundred } from "./greaterOneHundred.js";
import { numberToWord } from "./numberToWord.js";

export function greaterFourteen(number) {
  const teen = parseInt(number / 10);
  let word = "";
  if (teen === 1 && number !== 15) {
    word = numberToWord(number % 10) + "teen";
  } else if (teen === 2) {
    if (number === 20) {
      word = "Twenty";
    } else {
      word = "Twenty " + numberToWord(number % 20);
    }
  } else if (teen === 3) {
    if (number === 30) {
      word = "Thirty";
    } else {
      word = "Thirty " + numberToWord(number % 30);
    }
  } else if (teen === 4) {
    if (number === 40) {
      word = "Forty";
    } else {
      word = "Forty " + numberToWord(number % 40);
    }
  } else if (teen === 5) {
    if (number === 50) {
      word = "Fifty";
    } else {
      word = "Fifty  " + numberToWord(number % 50);
    }
  } else if (teen === 6) {
    if (number === 60) {
      word = "Sixty";
    } else {
      word = "Sixty " + numberToWord(number % 60);
    }
  } else if (teen === 7) {
    if (number === 70) {
      word = "Seventy";
    } else {
      word = "Seventy " + numberToWord(number % 70);
    }
  } else if (teen === 8) {
    if (number === 80) {
      word = "Eighty";
    } else {
      word = "Eighty " + numberToWord(number % 80);
    }
  } else if (teen === 9) {
    if (number === 90) {
      word = "Ninety";
    } else {
      word = "Ninety " + numberToWord(number % 90);
    }
  } else {
    word = greaterOneHundred(number);
  }
  return word;
}
