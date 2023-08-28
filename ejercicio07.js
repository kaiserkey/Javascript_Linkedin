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
