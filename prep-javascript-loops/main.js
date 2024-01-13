// create your loops here.
function whileLoop1() {
  const newArray = [];
  let n = 0;
  while (n<10) {
    newArray.push(n);
    n++;
  }
  return newArray;
}

console.log('whileLoop1 output:', whileLoop1());


function whileLoop2() {
  const newArray = [];
  let n = 0;
  while (n<19) {
    newArray.push(n);
    n+= 2;
  }
  return newArray;
}

console.log('whileLoop2 output:', whileLoop2());


function forLoop1() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log('forLoop1 output:', forLoop1());


function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
}

forLoop2();


function forInLoop(object) {
  const newArray = [];
  for (let property in object) {
    newArray.push(property);
  }
  return newArray;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('forInLoop output:', forInLoop(object));


function forInLoop2(object) {
  const newArray = [];
  for (let property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}

console.log('forLoop2 output:', forInLoop2(object));
