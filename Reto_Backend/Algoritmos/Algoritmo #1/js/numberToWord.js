import { greaterFourteen } from "./greaterFourteen.js";

export function numberToWord(number) {
  let word = "";
  if (number === 0) {
    word = "";
  } else if (number === 1) {
    word = "one";
  } else if (number === 2) {
    word = "two";
  } else if (number === 3) {
    word = "three";
  } else if (number === 4) {
    word = "four";
  } else if (number === 5) {
    word = "five";
  } else if (number === 6) {
    word = "six";
  } else if (number === 7) {
    word = "seven";
  } else if (number === 8) {
    word = "eight";
  } else if (number === 9) {
    word = "nine";
  } else if (number === 10) {
    word = "ten";
  } else if (number === 11) {
    word = "eleven";
  } else if (number === 12) {
    word = "twelve";
  } else if (number === 13) {
    word = "thirteen";
  } else if (number === 15) {
    word = "fifteen";
  } else {
    word = greaterFourteen(number);
  }
  return word;
}
