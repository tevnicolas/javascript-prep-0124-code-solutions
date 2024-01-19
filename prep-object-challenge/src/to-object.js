/* exported toObject */
function toObject(array) {
  const newObject = {};
  newObject[array[0]] = array[1];
  return newObject;
}
