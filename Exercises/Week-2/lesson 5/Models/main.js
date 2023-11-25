const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };

  const subtract = function (x, y) {
    return x - y;
  };

  const multiply = function (x, y) {
    return x * y;
  };

  const divide = function (x, y) {
    return x / y;
  };

  return {
    add: add,
    sub: subtract,
    mult: multiply,
    div: divide,
  };
};
const calculator = mathOperations();
console.log(calculator.add(13, 29));
console.log(calculator.mult(1.75, 24));
console.log(calculator.mult(7, calculator.div(36, 6)));

const m = mathOperations();

const UsersModule = function () {
  const _users = ["Aaron", "Avi"];

  const addUser = function (user) {
    _users.push(user);
  };

  const listUsers = function () {
    for (let user of _users) {
      console.log(user);
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");
usersModule.listUsers();
