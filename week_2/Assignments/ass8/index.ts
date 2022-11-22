let user: { // change from const to let allow var update
   username: string, // reamove readonly to be editable `var`
    age: number | string, // adding string option for `var` by union operator
    website?: string,
    skills: {
      frontEnd: string[],
      backEnd: (string|number)[] // adding number option for `array` by union operator
    }
  } = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
      frontEnd: ["HTML", "CSS", "JS"],
      backEnd: ["PHP", "Python"]
    }
  }
  
  // We Need To Remove Error From This Edits
  user.username = "Osama";
  user.age = "40";
  user.skills.backEnd.push(100);