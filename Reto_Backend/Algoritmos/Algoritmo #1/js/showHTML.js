import { cleanHTML } from "./cleanHTML.js";
import { wait, result } from "./selectors.js";
import { quantity } from "./validate.js";

export function showHTML() {
  cleanHTML();

  wait.textContent = `The sentence is: ${
    document.querySelector("#sentence").value
  }`;

  quantity.forEach((letter) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${letter}</td>
    `;

    result.appendChild(row);
  });
}
