"use strict";
exports.__esModule = true;
var post;
// post = [100, 200, "Title"]; // Error
// post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
// Create Destructuring Here
var id = post[0], title = post[1], state = post[2];
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true
