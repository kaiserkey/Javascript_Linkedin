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

//ciclo for in se usa para recorrer propiedades de un objeto
var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
}

for (const propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]); 
    debugger;
}

//ciclo for of (nuevo en ES6) se usa para recorrer arreglos y objetos iterables
var colores = ["rojo", "verde", "azul"];

for (const color of colores) {  
    console.log(color);
    debugger;
}

//ciclo for each (nuevo en ES6) se usa para recorrer arreglos y objetos iterables

colores.forEach(function(color) {
    console.log(color);
    debugger;
});