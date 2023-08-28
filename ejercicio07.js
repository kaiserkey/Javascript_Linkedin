"use strict"

//funciones en javascript

function saludar(){
    console.log("Hola Mundo");
}

saludar();

//funciones con retorno

function saludar2(){
    return "Hola Mundo";
}

console.log(saludar2());

//funciones con parametros

function saludarConParametros(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludarConParametros("Juan", "Perez");

//funciones con parametros por defecto

function saludarConProfesion(nombre = "Persona", profesion = "Analista de Sistemas"){
    console.log(`Hola ${nombre} mi profesion es ${profesion}`);
}

saludarConProfesion();
saludarConProfesion("Juan", "Desarrollador");

//funciones expresivas - funciones anonimas

const saludarConEdad = function(nombre = "Persona", edad = 20){
    console.log(`Hola ${nombre} mi edad es ${edad}`);
}

saludarConEdad();
saludarConEdad("Juan", 30);

//Arrow Functions - funciones flecha

const saludarConApellido = (nombre = "Persona", apellido = "Apellido") => console.log(`Hola ${nombre} ${apellido}`);

saludarConApellido();
saludarConApellido("Juan", "Perez");

const sumar = (a,b) => a + b;

console.log(sumar(1,2));

//funciones como parametros de otras funciones

function saludoConFunciones(nombre, cb){
    return cb(nombre);
}

const miSaludo = saludoConFunciones("Juan", function(nombre){
    return `Hola ${nombre}`;
});

