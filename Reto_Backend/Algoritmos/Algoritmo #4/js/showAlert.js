import { cleanHTML } from "./cleanHTML.js";
import { wait, form } from "./selectors.js";

export function showAlert(msg) {
  cleanHTML();
  wait.textContent = "Wait Sentence";

  const existsAlert = document.querySelector(".invalid-feedback");
  if (!existsAlert) {
    const alert = document.createElement("div");
    alert.classList.add(
      "invalid-feedback",
      "d-block",
      "text-center",
      "alert",
      "alert-danger"
    );
    alert.textContent = msg;
    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}
