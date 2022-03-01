import { greaterOneThousand } from "./greaterOneThousand.js";
import { numberToWord } from "./numberToWord.js";

export function greaterOneHundred(number) {
  const hundred = parseInt(number / 100);
  let word = "";

  if (hundred < 10) {
    let greaterOneHundred = numberToWord(hundred);
    return (word = `${greaterOneHundred} hundred ${numberToWord(
      number % 100
    )}`);
  }
  return (word = greaterOneThousand(number));
}
