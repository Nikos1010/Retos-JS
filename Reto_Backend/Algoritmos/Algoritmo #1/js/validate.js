import { showAlert } from "./showAlert.js";
import { numberToWord } from "./numberToWord.js";
import { form } from "./selectors.js";
import { showHTML } from "./showHTML.js";

export let quantity;

export function validate(e) {
  e.preventDefault();
  const number = document.querySelector("#number").value;

  const emptyField = [number].some((field) => field === "");

  if (emptyField) {
    showAlert(`Error, The field must have at least one letter`);
    return;
  }

  //Se verifica el saldo
  const words = numberToWord(Number(number));
  console.log(words);
  //quantity = orderLetters(letters);
  //showHTML();
  form.reset();
}
