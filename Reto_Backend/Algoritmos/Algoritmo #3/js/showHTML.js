import { cleanHTML } from "./cleanHTML.js";
import { wait, result } from "./selectors.js";
import { quantity } from "./validate.js";

export function showHTML() {
  cleanHTML();

  wait.textContent = `The sentence is: ${
    document.querySelector("#sentence").value
  }`;

  for (const letter in quantity) {
    const row = document.createElement("div");
    row.innerHTML = `
        <p>${letter} => <span>${quantity[letter]}</span></p>
        `;
    result.appendChild(row);
  }
}
