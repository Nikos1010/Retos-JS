import { limpiarHTML } from "./limpiarHTML.js";
import { esperando, formulario } from "./selectores.js";

export function mostrarAlerta(msg) {
  limpiarHTML();
  esperando.textContent = "Esperando Numero";

  const existeAlerta = document.querySelector(".invalid-feedback");
  if (!existeAlerta) {
    const alerta = document.createElement("div");
    alerta.classList.add(
      "invalid-feedback",
      "d-block",
      "text-center",
      "alert",
      "alert-danger"
    );
    alerta.textContent = msg;
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}
