import { showAlert } from "./showAlert.js";
import { triangleType } from "./triangleType.js";
import { form } from "./selectors.js";
import { showHTML } from "./showHTML.js";

export let triangle, sidesTriangle;

export function validate(e) {
  e.preventDefault();
  const sideOne = document.querySelector("#sideOne").value;
  const sideTwo = document.querySelector("#sideTwo").value;
  const sideThree = document.querySelector("#sideThree").value;

  const emptyField = [sideOne, sideTwo, sideThree].some(
    (field) => field === "" || field === "0"
  );

  if (emptyField) {
    showAlert(`Error, The field must have at least one letter`);
    return;
  }

  //Se verifica el saldo
  triangle = triangleType(sideOne, sideTwo, sideThree);
  sidesTriangle = [sideOne, sideTwo, sideThree];
  showHTML();
  form.reset();
}
