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
console.log(`La palabra Javascript empieza en la posición: ${mensaje.match(/aprendiendo/gi)}`);