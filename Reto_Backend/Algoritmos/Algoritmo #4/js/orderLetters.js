import { quantityLetters } from "./quantityLetters.js";

export function orderLetters(letters) {
  const order = letters.sort();
  const quantity = quantityLetters(order);
  return quantity;
}
