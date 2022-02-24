/*recibir un numero X y retornar un numero organizado de mayor a menor y de menor a mayor, 
si ingreso 923459 debe retornar 995432 y 234599.
*/
import { validar } from "./validar.js";
import { formulario } from "./selectores.js";

formulario.addEventListener("submit", validar);
