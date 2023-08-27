"use strict"

var foo = "Daniel"; // var is a variable, it can be changed
let bar = "Daniel"; // let is a variable, it can be changed
const baz = "Daniel"; // const is a constant, it can't be changed

function saludo() {
    let bar = "Daniel"; // bar is a local variable, it can be changed
    foo = "kaiserkey"; // foo is a global variable, it can be changed
    console.log("Hola: " + bar);
}

saludo();
console.log("Hola: " + foo); 