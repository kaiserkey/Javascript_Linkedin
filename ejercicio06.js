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

colores.forEach(function(color) { // se puede usar una funcion anonima o una funcion flecha
    console.log(color);
    debugger;
});

//ciclo for each (nuevo en ES6) se usa para recorrer arreglos y objetos iterables

colores.forEach(color => { // se puede usar una funcion anonima o una funcion flecha
    console.log(color);
    debugger;
});

//ciclo for each (nuevo en ES6) se usa para recorrer arreglos y objetos iterables

colores.forEach((color, index) => console.log(`${index} - ${color}`)); // se puede usar una funcion anonima o una funcion flecha

//ciclo for each (nuevo en ES6) se usa para recorrer arreglos y objetos iterables

colores.forEach((color, index, arreglo) => console.log(`${index} - ${color} - ${arreglo}`)); // se puede usar una funcion anonima o una funcion flecha, el arreglo es opcional y es el arreglo que se esta recorriendo

//continue y break
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const numero of numeros) {
    if (numero % 2 === 0) {
        continue; //se salta el numero par
    }
    console.log(numero);
    debugger;
}

for (const numero of numeros) {
    if (numero === 5) {
        break; //se sale del ciclo
    }
    console.log(numero);
    debugger;
}

//etiquetas



