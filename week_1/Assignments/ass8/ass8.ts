/*
التكليف 08

    قمنا بإستخدام ال Function التالية ولدينا أكثر من مثال
    ال Arguments غير معروف عددها ويمكن أن تزيد أو تنقص
    قم بكتابة ال Function التي تقوم بطباعة جميع العناصر وبجانبها نوعها. شاهد المثال لترى المطلوب

*/

// Write The Function Here
function printInConsole(...args:any[]):string{
    
    args.forEach(
        (p)=> {
            console.log(`The Value Is ${p} And Type Is ${typeof(p)}`)
            
        }
    )
    return "Done";
    
    
}
// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));



// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done

export{}