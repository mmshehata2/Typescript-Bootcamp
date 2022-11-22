/*
  Data Types
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/
function getActions(btns) {
    console.log("Hello ".concat(btns.one));
    console.log("Hello ".concat(btns.two));
    console.log("Hello ".concat(btns.three));
    console.log("Hello ".concat(btns.five));
}
getActions({ one: "String", two: 100, three: true, five: true });
