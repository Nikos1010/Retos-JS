import { cleanHTML } from "./cleanHTML.js";
import { wait, result } from "./selectors.js";
import { primeResult } from "./validate.js";

export function showHTML() {
  cleanHTML();

  wait.textContent = `The nunber is: ${
    document.querySelector("#number").value
  }`;

  const numberPrimeParagraph = document.createElement("p");
  numberPrimeParagraph.textContent = "Number: ";

  const numberPrimeSpan = document.createElement("span");
  numberPrimeSpan.textContent = primeResult;

  numberPrimeParagraph.appendChild(numberPrimeSpan);

  result.appendChild(numberPrimeParagraph);
}
