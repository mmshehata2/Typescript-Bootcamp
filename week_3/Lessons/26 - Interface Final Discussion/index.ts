/*
  Interface
  - Interface vs Type Aliases
  - Take A Look On HTMLElement Interface
*/

let el = document.getElementById("id") as HTMLElement;

// Homepage
type Settings={
  readonly theme: boolean;
  font: string;
  sidebar: boolean;
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true
}


export {}