// const user = {
//   firstName: 'Lucas',
//   info() {
//     return 'My name is ' + this.firstName;
//   },
// };

// console.log(user.info());

function info() {
  return 'My name is ' + this.firstName;
}

console.log(info());
