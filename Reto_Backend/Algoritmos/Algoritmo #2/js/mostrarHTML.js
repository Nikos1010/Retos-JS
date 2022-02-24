import { limpiarHTML } from "./limpiarHTML.js";
import { esperando, resultado } from "./selectores.js";
import { mayor, menor } from "./validar.js";

export function mostrarHTML() {
  limpiarHTML();

  esperando.textContent = `El número es: ${
    document.querySelector("#numero").value
  }`;

  const menorAMayorParrafo = document.createElement("p");
  menorAMayorParrafo.textContent = "Acomodado de menor a mayor: ";

  const menorAMayorSpan = document.createElement("span");
  menorAMayorSpan.textContent = menor;

  menorAMayorParrafo.appendChild(menorAMayorSpan);

  const mayorAMenorParrafo = document.createElement("p");
  mayorAMenorParrafo.textContent = "Acomodado de mayor a menor: ";

  const mayorAMenorSpan = document.createElement("span");
  mayorAMenorSpan.textContent = mayor;

  mayorAMenorParrafo.appendChild(mayorAMenorSpan);

  resultado.appendChild(menorAMayorParrafo);
  resultado.appendChild(mayorAMenorParrafo);
}
