/**
 التكليف 04

    لدينا ال Array التالية ومحدد فيها ال Type Annotations
    المطلوب تحديث قيمة ال Array وإضافة أي بيانات عشوائية فيها بدون ظهور اي أخطاء
 
 */
    let arr: (number | boolean[] | (string | (string | number)[])[])[]=[1,[true,false],["A",["B",1]]];
    console.log(arr)