"use strict"

// propiedades numericas

console.log("MAX_VALUE: " + Number.MAX_VALUE);
console.log("MIN_VALUE: " + Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY);
console.log("POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY);
console.log("NaN: " + Number.NaN);

// metodos para trabajar con numeros

var numero = "10.5";
console.log("parseInt: " + parseInt(numero)); // convierte a entero
console.log("parseFloat: " + parseFloat(numero)); // convierte a flotante
console.log("isNaN: " + isNaN(numero)); // comprueba si es un numero
console.log("isInteger: " + Number.isInteger (numero)); // comprueba si es un entero
console.log("isSafeInteger: " + Number.isSafeInteger(numero)); // comprueba si es un entero seguro (no se desborda) 
console.log("toFixed: " + numero.toFixed(4)); // convierte a notacion fija con 4 decimales
console.log("toPrecision: " + numero.toPrecision(4)); // convierte a notacion fija con 4 decimales
console.log("toString: " + numero.toString()); // convierte a cadena
console.log("valueOf: " + numero.valueOf()); // devuelve el valor primitivo del objeto
