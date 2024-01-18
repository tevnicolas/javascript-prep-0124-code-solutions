/* exported capitalize */
function capitalize(word) {
  let newWord = word.toLowerCase();
  return newWord.charAt(0).toUpperCase() + newWord.slice(1);
}
