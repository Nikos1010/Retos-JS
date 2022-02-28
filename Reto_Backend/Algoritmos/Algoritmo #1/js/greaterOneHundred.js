import { greaterOneThousand } from "./greaterOneThousand.js";
import { numberToWord } from "./numberToWord.js";

export function greaterOneHundred(number) {
  const hundred = parseInt(number / 100);
  let word = "";

  if (hundred < 10) {
    let greaterOneHundred = numberToWord(hundred);
    word = `${greaterOneHundred} hundred ${numberToWord(number % 100)}`;
  } else {
    word = greaterOneThousand(number);
  }
  return word;
}
