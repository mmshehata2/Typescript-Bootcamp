"use strict";
/*
  Class
  - Implement Interface
*/
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    User.prototype.save = function () {
        console.log("Saved");
    };
    User.prototype.update = function () {
        console.log("Updated");
    };
    return User;
}());
var userOne = new User("Elzero", true, "Open Sans");
console.log(userOne.username);
console.log(userOne.font);
userOne.save();
userOne.update();
