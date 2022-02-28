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
  }

  //Se verifica el saldo
  if (number === "0") {
    words = "zero";
  } else {
    words = numberToWord(Number(number));
  }
  showHTML();
  form.reset();
}
