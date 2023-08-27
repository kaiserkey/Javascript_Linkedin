"use strict"

//opperadores aritmeticos
var a = 3,
    b = 2;
var z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b;
console.log("Resultado del módulo: " + z);

z = a ** b;
console.log("Resultado de la potencia: " + z);

//operadores de incremento y decremento
var a = 3,
    b = 2;

var z = a++; // primero asigna y luego incrementa
console.log(a);
console.log(z);
z = ++a; // primero incrementa y luego asigna
console.log(a);
console.log(z);

z = b--; // primero asigna y luego decrementa
console.log(b);
console.log(z);
z = --b; // primero decrementa y luego asigna
console.log(b);
console.log(z);

//operadores de asignación
var a = 1;
var b = 2;

a += 3; // a = a + 3
console.log(a);

b -= 3; // b = b - 3
console.log(b);

a *= 3; // a = a * 3
console.log(a);

b /= 3; // b = b / 3

console.log(b);

//operadores de comparación
var a = 3,
    b = 2,
    c = "3";

var z = a == c; // compara el valor sin importar el tipo
console.log(z);

z = a === c; // compara el valor y el tipo
console.log(z);

z = a < b;
console.log(z);

z = a > b;
console.log(z);

z = a <= b;
console.log(z);

z = a >= b;
console.log(z);

z = a != b;
console.log(z);

z = a !== c;
console.log(z);

//operadores lógicos
var a = 3,
    b = 2,
    c = "3";

var z = a != b && a == c; // and
console.log(z);

z = a > b || a == c; // or
console.log(z);

z = !(a == c); // not
console.log(z);

//operador ternario
var edad = 18;
var resultado = edad >= 18 ? "Puede votar" : "No puede votar";
console.log(resultado);

//operadores de tipo de datos
var a = 3;
var b = "3";

var z = typeof a;
console.log(z);

z = typeof b;
console.log(z);

z = a === b;
console.log(z);

z = a !== b;
console.log(z);


var a = 1;
var b = 2;
var c = 5;

var op1 = a < b;
var op2 = c <= a;
var op3 = (a > b) != (c > a) ;
console.log("Op1: " + op1);
console.log("Op2: " + op2);
console.log("Op3: " + op3);



