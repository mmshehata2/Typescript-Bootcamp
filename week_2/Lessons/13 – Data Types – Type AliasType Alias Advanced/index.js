/*
  Data Types
  - Advanced Type Alias
*/
function getActions(btns) {
    console.log("Action for up btn ".concat(btns.up));
    console.log("Action for down btn ".concat(btns.down));
    console.log("Action for right btn ".concat(btns.right));
    console.log("Action for left btn ".concat(btns.left));
    console.log("Action for x btn ".concat(btns.x));
}
getActions({ up: "Jump", down: "Go to down", right: "Go to right", left: "Go to left", x: true });
