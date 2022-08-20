/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/
var theName = "Elzero";
var theAge = 40;
var hire = true;
var all = "Elzero Web School";
var allVars; // Any
theName = "Osama";
all = 100;
function add(n1, n2) {
    return n1 + n2;
}
// console.log(add(10, 20));
// console.log(typeof add(10, 20));
function add(n1, n2) {
  return n1 + n2;
}
console.log(add(10, "20"));
console.log(typeof add(10, "20"));
