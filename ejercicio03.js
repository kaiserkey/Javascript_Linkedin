"use strict"
//numeros
var cantidad = 12;
var precio = 1.5;
var total = cantidad * precio;

console.log("El total de la compra es: " + total);

var numero = "10";
console.log(Number(numero)); // Convertir a número
console.log(parseInt(10.5)); // Convertir a número entero
console.log(parseFloat(10.53)); // Convertir a número decimal

//strings
var nombre = "Daniel";
var apellido = 'Gonzalez';
var edad = 29;
//template string
console.log(`${nombre} ${apellido} ${String(edad)}`);

//booleanos
var activo = true;
var despedido = false;

console.log(Boolean(10 > 9));

//date
var fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); // día del mes
console.log(fecha.getDay()); // día de la semana
console.log(fecha.getMonth()); // mes
console.log(fecha.getFullYear()); // año
console.log(fecha.getHours()); // hora
console.log(fecha.getMinutes()); // minutos
console.log(fecha.getSeconds()); // segundos
console.log(fecha.getMilliseconds()); // milisegundos
console.log(fecha.toString()); // convierte a string
console.log(fecha.toDateString()); // convierte a string
console.log(fecha.toLocaleString()); // convierte a string
console.log(fecha.toLocaleDateString()); // convierte a string
console.log(fecha.toLocaleTimeString()); // convierte a string

//simbolos
var simbolo1 = Symbol('dev');
var simbolo2 = Symbol('produccion');

//json

var persona = {
    nombre: "Daniel",
    apellido: "Gonzalez",
    edad: 29,
    direccion: {
        pais: "Argentina",
        ciudad: "San Luis",
        edificio: {
            nombre: "Edificio principal",
            telefono: "123456789"
        }
    }
};

console.log(persona);
var personaJSON = JSON.stringify(persona);
console.log(personaJSON);
var nuevaPersona = JSON.parse(personaJSON);
console.log(nuevaPersona);




