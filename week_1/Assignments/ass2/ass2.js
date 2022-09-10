"use strict";
/*
التكليف 02

    لدينا ال Function التالية تقبل منك إثنين Parameters وهم الأرقام
    ال Type الخاص بالبيانات تم إستنتاجه على أنه Any
    السطر الثاني الذي يحتوي على “10”, “20” سوف يعمل بدون اي مشكلة لكننا نريد ألا يعمل
    ال Function الخاصة بنا تتعامل فقط مع الأرقام

 */
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(calculate(10, 20)); // 30
//   console.log(calculate("10", "20")); // We Don't Need This To Work , it will not work if we annotate fun params as numbers
console.log(calculate(+true, +true)); // 2
