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



