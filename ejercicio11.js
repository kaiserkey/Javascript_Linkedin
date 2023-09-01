"use strict"

// propiedades numericas

console.log("MAX_VALUE: " + Number.MAX_VALUE);
console.log("MIN_VALUE: " + Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY);
console.log("POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY);
console.log("NaN: " + Number.NaN);

// metodos para trabajar con numeros

var numero = "10.5";
var numero2 = 10.5;
console.log("parseInt: " + parseInt(numero)); // convierte a entero
console.log("parseFloat: " + parseFloat(numero)); // convierte a flotante
console.log("isNaN: " + isNaN(numero2)); // comprueba si es un numero
console.log("isInteger: " + Number.isInteger (numero2)); // comprueba si es un entero
console.log("isSafeInteger: " + Number.isSafeInteger(numero2)); // comprueba si es un entero seguro (no se desborda) 
console.log("toExponential: " + numero2.toExponential(4)); // convierte a notacion exponencial con 4 decimales
console.log("toFixed: " + numero2.toFixed(4)); // convierte a notacion fija con 4 decimales
console.log("toPrecision: " + numero2.toPrecision(4)); // convierte a notacion fija con 4 decimales
console.log("toString: " + numero2.toString()); // convierte a cadena
console.log("valueOf: " + numero2.valueOf()); // devuelve el valor primitivo del objeto
