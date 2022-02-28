import { greaterOneMillion } from "./greaterOneMillion.js";
import { numberToWord } from "./numberToWord.js";

export function greaterOneThousand(number) {
  const thousand = parseInt(number / 1000);
  let word = "";

  if (thousand < 1000) {
    let greaterTenThousand = numberToWord(thousand);
    word = `${greaterTenThousand} thousand ${numberToWord(number % 1000)}`;
  } else {
    word = greaterOneMillion(number);
  }
  return word;
}
