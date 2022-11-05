/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
    up: string,
    down: string, 
    right: string,
    left:string
}

type last = Buttons & {x:boolean}

function getActions(btns: last) {
    console.log(`Action for up btn ${btns.up}`)
    console.log(`Action for down btn ${btns.down}`)
    console.log(`Action for right btn ${btns.right}`)
    console.log(`Action for left btn ${btns.left}`)    
    console.log(`Action for x btn ${btns.x}`)    
}

getActions({ up: "Jump", down: "Go to down", right: "Go to right", left: "Go to left",x:true });