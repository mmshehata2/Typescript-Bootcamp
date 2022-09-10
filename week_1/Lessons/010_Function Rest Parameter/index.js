/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    // nums.forEach((num) => result += num);
    return result;
}
console.log(addAll(10, 20, 30, 100, 10.5, -true));
