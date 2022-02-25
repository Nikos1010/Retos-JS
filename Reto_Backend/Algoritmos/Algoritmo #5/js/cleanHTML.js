import { result } from "./selectors.js";

export function cleanHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}
