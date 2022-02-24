const form = document.querySelector("#form");
const wait = document.querySelector("#wait");
const result = document.querySelector("#result");
let mayor, menor;

export function validar(e) {
  e.preventDefault();
  const number = document.querySelector("#number").value;

  const campoVacio = [number].some((campo) => campo === "");

  if (campoVacio) {
    mostrarAlerta(`Error el campo debe de estar lleno`);
    return;
  }

  //Se verifica el saldo
  const numeroSeparado = separarNumero(numero);
  mayor = mayorAMenor(numeroSeparado);
  menor = menorAMayor(numeroSeparado);
  mostrarHTML();
  form.reset();
}

function separarNumero(numeroMayor) {
  const arregloNumero = [];
  for (let i = 0; i < numeroMayor.length; i++) {
    arregloNumero.push(Number(numeroMayor[i]));
  }
  return arregloNumero;
}

function mayorAMenor(mayores) {
  const arregloMayor = mayores.sort((a, b) => b - a);
  const mayor = volverString(arregloMayor);
  return mayor;
}

function menorAMayor(menores) {
  const arregloMenor = menores.sort((a, b) => a - b);
  const menor = volverString(arregloMenor);
  return menor;
}

function volverString(numero) {
  let acomodacion = "";
  for (let i = 0; i < numero.length; i++) {
    acomodacion += String(numero[i]);
  }
  return acomodacion;
}

function mostrarHTML() {
  limpiarHTML();

  wait.textContent = `El número es: ${document.querySelector("#number").value}`;

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

  result.appendChild(menorAMayorParrafo);
  result.appendChild(mayorAMenorParrafo);
}

function mostrarAlerta(msg) {
  limpiarHTML();
  wait.textContent = "Wait Number";

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
    form.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function limpiarHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}
