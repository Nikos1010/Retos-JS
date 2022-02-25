import { cleanHTML } from "./cleanHTML.js";
import { wait, result } from "./selectors.js";
import { triangle, sidesTriangle } from "./validate.js";

export function showHTML() {
  cleanHTML();

  wait.textContent = `The triangle is: ${triangle}`;

  sidesTriangle.forEach((triangle, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td><strong>Side #${index + 1}:</strong> ${triangle}</td>
    `;

    result.appendChild(row);
  });
}
