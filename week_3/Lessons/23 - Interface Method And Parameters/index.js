"use strict";
/*
  Interface
  - Interface Method And Parameters
*/
exports.__esModule = true;
var user = {
    id: 100,
    username: "Elzero",
    country: "Egypt",
    sayHello: function () {
        return "Hello ".concat(this.username);
    },
    sayWelcome: function () {
        return "Welcome ".concat(user.username);
    },
    getDouble: function (n) {
        return n * 2;
    }
};
console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));
