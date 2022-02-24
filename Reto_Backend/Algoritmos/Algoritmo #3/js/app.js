/* recibir una frase y retornar cuantas letras tiene de cada una, es decir si escribo 
"el murcielago del archipielago come frutas" debe retornar A -> 4 E->5 L->4 M->2 U->2 R-3....
 */
import { validate } from "./validate.js";
import { form } from "./selectors.js";

form.addEventListener("submit", validate);
