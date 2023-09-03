"use strict"

//Strings en javascript

var mensaje = "Estoy aprendiendo Javascript y estoy aprendiendo mucho";

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
console.log(`Devuelve la palabra aprendiendo : ${mensaje.match(/aprendiendo/gi)}`); //gi = global, case insensitive (no distingue mayúsculas de minúsculas)

//substr (devuelve una subcadena)
console.log(`La palabra aprendiendo empieza en la posición: ${mensaje.substr(6,11)}`); //substr(posición, longitud) esta funcion fue reemplazada por substring y slice (ver abajo)

//substring (devuelve una subcadena)
console.log(`La palabra aprendiendo empieza en la posición: ${mensaje.substring(6,17)}`); //substring(posición inicial, posición final)

//slice (devuelve una subcadena)
console.log(`La palabra aprendiendo empieza en la posición: ${mensaje.slice(6,17)}`); //slice(posición inicial, posición final)




