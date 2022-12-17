/*
  Type Annotations With Class
*/
var User = /** @class */ (function () {
    function User(username, salary) {
        this.u = username;
        this.s = salary;
        this.msg = function () {
            return "Hello ".concat(this.u, " Your Salary Is ").concat(this.s);
        };
    }
    User.prototype.sayMsg = function () {
        return "Hello ".concat(this.u, " Your Salary Is ").concat(this.s);
    };
    return User;
}());
var userOne = new User("Elzero", 6000);
console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());
