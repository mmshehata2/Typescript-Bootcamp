/**
 التكليف 05

    لدينا ال Function التالية
    نحتاج لتعديل ملف ال Config حتى نحقق المطلوب
    ال username هنا يوجد به خطأ لأن ال Compiler إستنتج أن نوع البيانات Any ونحن نحتاج لتخطي هذا الخطأ
    لدينا متغير بإسم rank غير مستخدم ونحتاج لإظهار خطأ ينبهنا
    لدينا Parameter بإسم age غير مستخدم ونحتاج لإظهار خطأ ينبهنا
    لدينا سطر في ال Console لن يعمل ونريد أن ينبهنا على هذا الخطأ

 */
    function reportErrors(username, age: number) {
        let rank = "Professor";
        return `Username: ${username}`;
        console.log("We Will Not Reach Here");
      }
      
      console.log(reportErrors("Elzero", 40));