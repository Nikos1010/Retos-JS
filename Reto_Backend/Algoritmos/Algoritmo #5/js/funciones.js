const form = document.querySelector("#form");
const wait = document.querySelector("#wait");
const result = document.querySelector("#result");
let primeResult;

export function validate(e) {
  e.preventDefault();
  const number = document.querySelector("#number").value;

  const campoVacio = [number].some((campo) => campo === "0" || campo === "");

  if (campoVacio) {
    showAlert(`Error, the field must be filled`);
    return;
  }

  //Se verifica el saldo
  numberPrime(number);
  mostrarHTML();
  form.reset();
}

function numberPrime(prime) {
  const number = Number(prime);
  if (number === 1) {
    primeResult = `${prime} no es primo`;
  } else {
    let cont = 0;
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        cont++;
        if (cont > 2) {
          primeResult = `${prime} no es primo`;
          return;
        }
      }
    }
    if (cont < 3) {
      primeResult = `${prime} es primo`;
    }
  }
}

function mostrarHTML() {
  limpiarHTML();

  wait.textContent = `The nunber is: ${
    document.querySelector("#number").value
  }`;

  const numberPrimeParagraph = document.createElement("p");
  numberPrimeParagraph.textContent = "Number: ";

  const numberPrimeSpan = document.createElement("span");
  numberPrimeSpan.textContent = primeResult;

  numberPrimeParagraph.appendChild(numberPrimeSpan);

  result.appendChild(numberPrimeParagraph);
}

function showAlert(msg) {
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
