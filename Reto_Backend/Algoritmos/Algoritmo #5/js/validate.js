import { form } from "./selectors.js";
import { showAlert } from "./showAlert.js";
import { numberPrime } from "./numberPrime.js";
import { showHTML } from "./showHTML.js";

export let primeResult;

export function validate(e) {
  e.preventDefault();
  const number = document.querySelector("#number").value;

  const campoVacio = [number].some((campo) => campo === "0" || campo === "");

  if (campoVacio) {
    showAlert(`Error, the field must be filled`);
    return;
  }

  //Se verifica el saldo
  primeResult = numberPrime(number);
  showHTML();
  form.reset();
}
