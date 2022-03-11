import { showAlert } from "./showAlert.js";
export function quantityLetters(words) {
  const lettersAcept = "^[a-zA-Z*]$";
  const dictionary = {};
  if (words.search(lettersAcept)) {
    showAlert("There are numbers or special characteres in the sentence");
  } else {
    for (let letter of words) {
      if (dictionary[letter] == undefined) {
        dictionary[letter] = 1;
      } else {
        dictionary[letter]++;
      }
    }
    return dictionary;
  }
}
