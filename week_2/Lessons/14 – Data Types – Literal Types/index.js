/*
  Data Types
  - Literal Types
*/
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(10, 10));
console.log(compare(10, 7));
console.log(compare(10, 20));
// Or 
console.log("********************************");
function compare2(num1, num2) {
    return num1 === num2 ? 0 : num1 > num2 ? 1 : -1;
}
console.log(compare(10, 10));
console.log(compare(10, 7));
console.log(compare(10, 20));
