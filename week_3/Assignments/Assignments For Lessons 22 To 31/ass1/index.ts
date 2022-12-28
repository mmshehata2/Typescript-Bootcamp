

// Edit The Interface To Fix The Problems
interface Member {
    id: number| string;
    username: string;
    country?: string;
    state: boolean;
    getName:() => string
  }
  
  // Do Not Edit The Code Below
  let user: Member = { // Property 'country' is missing in type(solved by making country optional in the interface)
    id: 100,
    username: "Elzero",
    state: true,
    getName() { // 'getName' does not exist in type 'Member' (solved by adding getName function in the interface)
      return this.username;
    }
  }
  
  user.id = 200;
  user.id = "200"; // Type 'string' is not assignable to type 'number' (solved by adding new type(string) to id property in the inteeface )
  user.state = false; // Cannot assign to 'state' because it is a read-only property (solved by removing readonly from state prop in the inerface)


  export{}