const person = {
  firstName: 'Tev',
  lastName: 'Nicolas',
  hobby: 'Music',

};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('This person\'s name is:', fullName);

person.job = 'unemployed';
console.log('This person\'s job is:', person.job);

person['previousJob'] = 'Recording Engineer';
console.log('This person\'s previous job is:', person['previousJob']);

console.log('The complete person object:', person);
