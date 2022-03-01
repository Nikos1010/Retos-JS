import { showAlert } from "./showAlert.js";
import { numberToWord } from "./numberToWord.js";
import { form } from "./selectors.js";
import { showHTML } from "./showHTML.js";

export let words;

export function validate(e) {
  e.preventDefault();
  const number = document.querySelector("#number").value;

  const emptyField = [number].some((field) => field === "");

  if (emptyField) {
    showAlert(`Error, The field must have at least one number`);
    return;
  } else if (Number(number) > 100000000) {
    showAlert(`Error, The number is greater than one hundred million`);
    return;
  }

  if (number === "0") {
    words = "zero";
  } else {
    words = numberToWord(Number(number));
  }
  showHTML();
  form.reset();
}
