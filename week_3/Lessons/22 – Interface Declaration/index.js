"use strict";
/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/
exports.__esModule = true;
var user = {
    id: 100,
    username: "Elzero",
    country: "Egypt"
};
user.country = "Syria";
console.log(user);
function getData(data) {
    console.log("Id Is ".concat(data.id));
    console.log("Username Is ".concat(data.username));
    console.log("Country Is ".concat(data.country));
}
getData({ id: 200, username: "Osama", country: "KSA" });
