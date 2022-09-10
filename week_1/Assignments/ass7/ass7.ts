/*
لتكليف 07

    لدينا ال Function التالية
    قم بإصلاح ال Function حتى تعمل جميع الأمثلة الموجودة بالأسفل بدون أي مشكلة
    ممنوع إستخدام ال Default Parameter Value

*/

function showMsg(user?: string, age?: boolean|number|string, country?: boolean|string) {
    return `${user}${age}${country}`;
  }
  
  console.log(showMsg());
  console.log(showMsg("Elzero"));
  console.log(showMsg("Elzero", 40));
  console.log(showMsg("Elzero", "40", "Egypt"));