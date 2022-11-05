/*
  Data Types
  - Literal Types
*/

type nums = 0 | 1 | -1;

function compare(num1: number, num2: number):nums {
    if (num1 === num2) { return 0 }
    else if (num1 > num2) { return 1 }
    else{return -1}
}
console.log(compare(10,10))
console.log(compare(10,7))
console.log(compare(10, 20))

// Or : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types
console.log("********************************")

function compare2(num1: number, num2: number): 0 | 1 | -1{
    return num1 === num2 ? 0: num1 > num2 ? 1: -1;
}
console.log(compare(10,10))
console.log(compare(10,7))
console.log(compare(10, 20))