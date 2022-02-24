import { formulario } from "./selectores.js";
import { mostrarHTML } from "./mostrarHTML.js";
import { mostrarAlerta } from "./mostrarAlerta.js";
import { separarNumero } from "./separarNumero.js";
import { menorAMayor, mayorAMenor } from "./acomodarNumero.js";

export let mayor, menor;

export function validar(e) {
  e.preventDefault();
  const numero = document.querySelector("#numero").value;

  const campoVacio = [numero].some((campo) => campo === "");

  if (campoVacio) {
    mostrarAlerta(`Error el campo debe de estar lleno`);
    return;
  }

  //Se verifica el saldo
  const numeroSeparado = separarNumero(numero);
  mayor = mayorAMenor(numeroSeparado);
  menor = menorAMayor(numeroSeparado);
  mostrarHTML();
  formulario.reset();
}
