// التكليف 03
// ========
// Do Not Edit Here
function showInfo(data) {
    console.log("The Name Is ".concat(data.theName));
    console.log("The Age Is ".concat(data.theAge));
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log("The Name Is ".concat(data.theName));
    console.log("The Age Is ".concat(data.theAge));
    console.log("The Country Is ".concat(data.country));
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
