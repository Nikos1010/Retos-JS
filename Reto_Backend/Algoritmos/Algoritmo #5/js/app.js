/*Ingresar un numero y definir si es un numero primo o no
 */
import { validate } from "./validate.js";
import { form } from "./selectors.js";

form.addEventListener("submit", validate);
