const formulario = document.querySelector("#formulario");
const dinero = document.querySelector("#dinero");
const retiro = document.querySelector("#retiro");
const billete10k = 10000;
const billete50k = 50000;
let variaBillete10 = 1;
let variaBillete20 = 1;
let variaBillete50 = 0;
let total = 0;
let probar;

export function saldo(e) {
  e.preventDefault();
  const retiro = document.querySelector("#cantidad").value;

  const campoVacio = [retiro].some((campo) => campo === "0");

  if (campoVacio) {
    mostrarAlerta("Error con la cantidad Ingresada");
    return;
  }

  //Se verifica el saldo
  verificarSaldo(parseInt(retiro));
  formulario.reset();
}

function verificarSaldo(saldoARetirar) {
  if (saldoARetirar < 10000) {
    mostrarAlerta("Error, la cantidad requerida es muy baja");
  } else {
    if (saldoARetirar % billete10k === 0) {
      if (saldoARetirar > billete50k) {
        total = saldoARetirar - billete50k;
        if (total >= billete50k) {
          variaBillete50 = total / billete50k;
          total = saldoARetirar - parseInt(variaBillete50) * billete50k;
          validarBilletes(total);
          mostrarRetiroHTML();

          return;
        }
        validarBilletes(saldoARetirar);
      } else {
        validarBilletes(saldoARetirar);
      }

      mostrarRetiroHTML();
    } else {
      mostrarAlerta("Cantidad imposible de sacar, solo multiplos de 10.000");
    }
  }
  restablecerValores();
}

function validarBilletes(validar) {
  variaBillete20 = validar / 10000;
  if (variaBillete20 % 2 === 0) {
    variaBillete10 = 2;
  }
  probar = validar - 10000 * variaBillete10;
  variaBillete20 = probar / 20000;
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

  const billete10Parrafo = document.createElement("p");
  billete10Parrafo.textContent = "Cantidad de billetes de $10.000: ";

  const billete10Span = document.createElement("span");
  billete10Span.textContent = variaBillete10;

  billete10Parrafo.appendChild(billete10Span);

  const billete20Parrafo = document.createElement("p");
  billete20Parrafo.textContent = "Cantidad de billetes de $20.000: ";

  const billete20Span = document.createElement("span");
  billete20Span.textContent = variaBillete20;

  billete20Parrafo.appendChild(billete20Span);

  const billete50Parrafo = document.createElement("p");
  billete50Parrafo.textContent = "Cantidad de billetes de $50.000: ";

  const billete50Span = document.createElement("span");
  billete50Span.textContent = parseInt(variaBillete50);

  billete50Parrafo.appendChild(billete50Span);

  dinero.appendChild(billete10Parrafo);
  dinero.appendChild(billete20Parrafo);
  dinero.appendChild(billete50Parrafo);
}

function limpiarHTML() {
  while (dinero.firstChild) {
    dinero.removeChild(dinero.firstChild);
  }
}

function restablecerValores() {
  variaBillete10 = 1;
  variaBillete20 = 1;
  variaBillete50 = 0;
  total = 0;
}
