"use strict";
/*
التكليف 08

    قمنا بإستخدام ال Function التالية ولدينا أكثر من مثال
    ال Arguments غير معروف عددها ويمكن أن تزيد أو تنقص
    قم بكتابة ال Function التي تقوم بطباعة جميع العناصر وبجانبها نوعها. شاهد المثال لترى المطلوب

*/
exports.__esModule = true;
// Write The Function Here
function printInConsole() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (p) {
        console.log("The Value Is ".concat(p, " And Type Is ").concat(typeof (p)));
    });
    return "Done";
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
