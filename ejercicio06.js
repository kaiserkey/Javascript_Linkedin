"use strict"

//ciclos en javascript

//ciclo for
var a = 5;
for (let i = 0; i < a; i++) {
    console.log(i);
    debugger;
}

//ciclo while
var b = 5;
while (b > 0) {
    console.log(b);
    b--;
    debugger;
}

//ciclo do while
var c = 5;
do {
    console.log(c);
    c--;
    debugger;
}
while (c > 0);

//ciclo for in
var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
}

