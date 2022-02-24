const formulario = document.querySelector("#formulario");
const dinero = document.querySelector("#dinero");
const retiro = document.querySelector("#retiro");
let totalBilletesDeDiez, totalBilletesDeVeinte, totalBilletesDeCincuenta;

export function saldo(e) {
  e.preventDefault();
  const retiro = document.querySelector("#cantidad").value;

  const campoVacio = [retiro].some((campo) => campo === "0");

  if (campoVacio) {
    mostrarAlerta(`Error con la cantidad Ingresada: $${retiro}`);
    return;
  }

  //Se verifica el saldo
  verificarSaldo(Number(retiro));
  formulario.reset();
}

function verificarSaldo(saldoARetirar) {
  if (saldoARetirar % 10000 === 0) {
    calcularBilletesDeCincuenta(saldoARetirar);

    mostrarRetiroHTML();
  } else {
    mostrarAlerta(
      `Cantidad de $${saldoARetirar} no es permitida, solo multiplos de $10.000`
    );
  }
}

function calcularBilletesDeCincuenta(saldoARetirar) {
  if (saldoARetirar - 50000 >= 50000) {
    totalBilletesDeCincuenta = (saldoARetirar - 50000) / 50000;
    saldoARetirar -= parseInt(totalBilletesDeCincuenta) * 50000;
  } else {
    totalBilletesDeCincuenta = 0;
  }

  console.log(totalBilletesDeCincuenta);
  calcularBilletesDeDiez(saldoARetirar);
  calcularBilletesDeVeinte(saldoARetirar);
}

function calcularBilletesDeDiez(saldoRestante) {
  totalBilletesDeDiez = saldoRestante / 10000;
  if (totalBilletesDeDiez % 2 === 0) {
    totalBilletesDeDiez = 2;
  } else {
    totalBilletesDeDiez = 1;
  }
}

function calcularBilletesDeVeinte(saldoRestante) {
  saldoRestante -= 10000 * totalBilletesDeDiez;
  totalBilletesDeVeinte = saldoRestante / 20000;
}

function mostrarAlerta(msg) {
  limpiarHTML();
  retiro.textContent = "Esperando Retiro";
  const existeAlerta = document.querySelector(".invalid-feedback");
  if (!existeAlerta) {
    const alerta = document.createElement("div");
    alerta.classList.add("invalid-feedback", "d-block", "text-center");
    alerta.textContent = msg;
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function mostrarRetiroHTML() {
  limpiarHTML();

  retiro.textContent = `Retiro de $${
    document.querySelector("#cantidad").value
  }`;

  const billeteDiezParrafo = document.createElement("p");
  billeteDiezParrafo.textContent = "Cantidad de billetes de $10.000: ";

  const billeteDiezSpan = document.createElement("span");
  billeteDiezSpan.textContent = totalBilletesDeDiez;

  billeteDiezParrafo.appendChild(billeteDiezSpan);

  const billeteVeinteParrafo = document.createElement("p");
  billeteVeinteParrafo.textContent = "Cantidad de billetes de $20.000: ";

  const billeteVeinteSpan = document.createElement("span");
  billeteVeinteSpan.textContent = totalBilletesDeVeinte;

  billeteVeinteParrafo.appendChild(billeteVeinteSpan);

  const billeteCincuentaParrafo = document.createElement("p");
  billeteCincuentaParrafo.textContent = "Cantidad de billetes de $50.000: ";

  const billeteCincuentaSpan = document.createElement("span");
  billeteCincuentaSpan.textContent = parseInt(totalBilletesDeCincuenta);

  billeteCincuentaParrafo.appendChild(billeteCincuentaSpan);

  dinero.appendChild(billeteDiezParrafo);
  dinero.appendChild(billeteVeinteParrafo);
  dinero.appendChild(billeteCincuentaParrafo);
}

function limpiarHTML() {
  while (dinero.firstChild) {
    dinero.removeChild(dinero.firstChild);
  }
}
