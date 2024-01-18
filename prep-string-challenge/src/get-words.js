/* exported getWords */
function getWords(string) {
  const newArray = string.split(' ');
  const newArray2 = newArray.filter((value) => value !== '');
  return newArray2;
}
