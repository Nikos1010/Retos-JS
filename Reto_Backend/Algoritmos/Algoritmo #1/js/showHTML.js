import { cleanHTML } from "./cleanHTML.js";
import { wait, result } from "./selectors.js";
import { words } from "./validate.js";

export function showHTML() {
  cleanHTML();

  wait.textContent = `The Number is: ${
    document.querySelector("#number").value
  }`;

  const wordParragraph = document.createElement("p");
  wordParragraph.textContent = `On sentence: ${words}`;

  result.appendChild(wordParragraph);
}
