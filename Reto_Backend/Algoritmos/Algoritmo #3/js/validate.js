import { showAlert } from "./showAlert.js";
import { divide } from "./divideWords.js";
import { orderLetters } from "./orderLetters.js";
import { form } from "./selectors.js";
import { showHTML } from "./showHTML.js";

export let quantity;

export function validate(e) {
  e.preventDefault();
  const sentence = document.querySelector("#sentence").value;

  const emptyField = [sentence].some((field) => field === "");

  if (emptyField) {
    showAlert(`Error el campo debe de estar lleno`);
    return;
  }

  //Se verifica el saldo
  const letters = divide(sentence);
  quantity = orderLetters(letters);
  showHTML();
  form.reset();
}
