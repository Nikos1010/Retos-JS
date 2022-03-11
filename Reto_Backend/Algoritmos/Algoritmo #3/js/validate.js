import { showAlert } from "./showAlert.js";
import { form } from "./selectors.js";
import { showHTML } from "./showHTML.js";
import { quantityLetters } from "./quantityLetters.js";

export let quantity;

export function validate(e) {
  e.preventDefault();
  const sentence = document.querySelector("#sentence").value;

  const emptyField = [sentence].some((field) => field === "");

  if (emptyField) {
    showAlert(`Error, The field must have at least one letter`);
    return;
  }

  //Se verifica el saldo
  quantity = quantityLetters(sentence.toUpperCase());
  showHTML();
  form.reset();
}
