/* exported getValues */
function getValues(object) {
  const newArray = [];
  for (let key in object) {
    newArray.push(object[key]);
  }
  return newArray;
}
