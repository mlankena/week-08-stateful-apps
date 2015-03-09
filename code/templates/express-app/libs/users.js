// Maintain some state about users:
var users = [];

// An object for representing users:
function User(name) {
  this.name = name;
}

// A simple getName method:
User.prototype.getName = function () {
  return this.name;
};

// Creates a new user:
exports.newUser = function (name) {
  var u = new User(name);
  users.push(u);
  return u;
};

// Gets a user:
exports.getUser = function (name) {
  var len = users.length;
  for (var i = 0; i < len; i++) {
    var u = users[i];
    if (u.getName() === name) {
      return u;
    }
  }
  return undefined;
};

// Returns user list:
exports.getUsers = function () {
  var result = [];
  for (var i = 0; i < users.length; i++)
    result.push(users[i]);
  return result;
};
