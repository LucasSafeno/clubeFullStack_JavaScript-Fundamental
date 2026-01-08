const person = {
  firstName: 'Lucas',
};

var user = {
  info(age) {
    console.log('my name is ' + this.firstName + ' and my age is ' + age);
  },
};

const userInfo = user.info.call(person, 31);
