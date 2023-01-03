
// before shorteen
class Shorten {
  public id: number;
  public username: string;
  protected title: string;
  constructor (id: number, username: string, title: string) {
    this.id = id;
    this.username = username;
    this.title = title;
  }
}

// after shorten
class Shorten1{
    constructor(public id:number , public username:string , protected title:string){    
    }
}

let tester = new Shorten(100, "Elzero", "Developer");
let tester2 = new Shorten1(100, "Elzero", "Developer");

console.log(tester2.id);
console.log(tester2.username);