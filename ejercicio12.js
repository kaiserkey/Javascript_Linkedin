"use strict"

//Strings en javascript

var mensaje = "Estoy aprendiendo Javascript y estoy aprendiendo mucho";

console.log(mensaje);

//length (devuelve la longitud del string)
console.log(`El texto tiene una longitud de: ${mensaje.length}`);

//indexOf (devuelve la posición de la primera coincidencia)
console.log(`La palabra Javascript empieza en la posición: ${mensaje.indexOf("Javascript")}`);

//lastIndexOf (devuelve la posición de la última coincidencia)
console.log(`La palabra Javascript empieza en la posición: ${mensaje.lastIndexOf("aprendiendo")}`);

//search (devuelve la posición de la primera coincidencia)
console.log(`La palabra Javascript empieza en la posición: ${mensaje.search("Javascript")}`);

//search con expresiones regulares
console.log(`La palabra Javascript empieza en la posición: ${mensaje.search(/ja/i)}`); 

//match (devuelve un array con los resultados)
console.log(`Devuelve todas las coincidencias de la palabra aprendiendo: ${mensaje.match(/aprendiendo/gi)}`); //gi = global, case insensitive (no distingue mayúsculas de minúsculas)

//substr (devuelve una subcadena)
console.log(`Devuelve la palabra aprendiendo: ${mensaje.substr(6,11)}`); //substr(posición, longitud) esta funcion fue reemplazada por substring y slice (ver abajo)

//substring (devuelve una subcadena)
console.log(`Devuelve la palabra aprendiendo: ${mensaje.substring(6,17)}`); //substring(posición inicial, posición final)

//slice (devuelve una subcadena)
console.log(`Devuelve la palabra aprendiendo: ${mensaje.slice(6,17)}`); //slice(posición inicial, posición final)

//slice con valores negativos (devuelve una subcadena)
console.log(`Devuelve la palabra much: ${mensaje.slice(-6,-1)}`); //slice(posición inicial, posición final)

//slice con un solo valor (devuelve una subcadena)
console.log(`Devuelve la palabra desde el indice 6 en adelante: ${mensaje.slice(6)}`); //slice(posición inicial, posición final)

//slice con un solo valor negativo (devuelve una subcadena)
console.log(`Devuelve la palabra desde el indice -6 en adelante: ${mensaje.slice(-6)}`); //slice(posición inicial, posición final)

//trim (elimina los espacios en blanco al principio y al final)
var mensaje2 = "    Estoy aprendiendo Javascript y estoy aprendiendo mucho    ";
console.log(`Devuelve el texto sin espacios en blanco al principio y al final: ${mensaje2.trim()}`);

//startsWith (devuelve true si el string empieza con el texto indicado)
console.log(`Devuelve true si el string empieza con el texto indicado: ${mensaje.startsWith("Estoy")}`);

//endsWith (devuelve true si el string termina con el texto indicado)
console.log(`Devuelve true si el string termina con el texto indicado: ${mensaje.endsWith("mucho")}`);

//includes (devuelve true si el string contiene el texto indicado)
console.log(`Devuelve true si el string contiene el texto indicado: ${mensaje.includes("aprendiendo")}`);

//repeat (repite el string el número de veces indicado)
console.log(`Repite el string el número de veces indicado: ${mensaje.repeat(3)}`);

//replace (reemplaza el texto indicado por el nuevo texto)
console.log(`Reemplaza el texto indicado por el nuevo texto: ${mensaje.replace("Javascript", "Python")}`);

//split (divide el string en un array de strings)
console.log(`Divide el string en un array de strings: ${mensaje.split(" ")}`); //split("separador")

//split (divide el string en un array de strings)
console.log(`Divide el string en un array de strings: ${mensaje.split(" ", 3)}`); //split("separador", límite)

//toUpperCase (convierte el string a mayúsculas)
console.log(`Convierte el string a mayúsculas: ${mensaje.toUpperCase()}`);

//toLowerCase (convierte el string a minúsculas)
console.log(`Convierte el string a minúsculas: ${mensaje.toLowerCase()}`);

//concat (concatena dos strings)
console.log(`Concatena dos strings: ${mensaje.concat(" ", "y me divierto")}`); //concat("string1", "string2")

//padStart (añade caracteres al principio del string)
console.log(`Añade caracteres al principio del string: ${mensaje.padStart(100, "Hola")}`); //padStart(longitud, "caracteres")

//padEnd (añade caracteres al final del string)
console.log(`Añade caracteres al final del string: ${mensaje.padEnd(100, "Hola")}`); //padEnd(longitud, "caracteres")

//Template strings (plantillas de texto)
var nombre = "Juan";
var apellido = "Gómez";
var edad = 20;

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`); //se pueden usar expresiones dentro de las llaves

console.log(mensaje[0]) //devuelve el caracter en la posición indicada

console.log(mensaje.charAt(1)) //devuelve el caracter en la posición indicada




