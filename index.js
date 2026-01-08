// const user = {
//   info() {
//     return 'My name is ' + this.firstName;
//   },
// };

// bind ( ligação ) - sempre retorna uma função
// const person = {
//   firstName: 'Lucas',
// };

// const userInfo = user.info.bind(person);

// console.log(userInfo());

function info(age) {
  return 'My name is ' + this.firstName + ' and my age is ' + age;
}

const person = {
  firstName: 'Lucas',
};

const userInfo = info.bind(person);

console.log(userInfo(38));
