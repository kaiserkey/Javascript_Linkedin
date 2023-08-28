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

const sumar = (a,b) => { a + b };

console.log(sumar(1,2));

//funciones como parametros de otras funciones

function saludoConFunciones(nombre, cb){
    return cb(nombre);
}

const miSaludo = saludoConFunciones("Juan", function(nombre){
    return `Hola ${nombre}`;
});

const miSaludo2 = saludoConFunciones("Juan", (nombre) => `Hola ${nombre}`);

console.log(miSaludo);

console.log(miSaludo2);

//setTimeout - ejecutar funciones despues de un tiempo
setTimeout(() => {
    console.log("Hola Mundo");
}, 3000);

//parametro de tipo rest - agrupar elementos en un arreglo

function saludarRest(nombre, ...rest){
    console.log(`Hola ${nombre}`);
    console.log(rest);
}

saludarRest("Juan", 20, true, "Argentina");

//parametro de tipo spread en funciones

function saludarSpread(nombre, edad, pais){
    console.log(`Hola ${nombre}`);
    console.log(`Edad ${edad}`);

//parametro de tipo callback - funciones que se ejecutan despues de un evento

const btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", function(){
    console.log("Saludando");
    this.location = "https://www.google.com";
});

//funciones como objetos

function saludarFunciones(nombre){
    console.log(`Hola ${nombre}`);
}

saludarFunciones.nombre = "Juan";

saludarFunciones.direccion = {
    pais: "Argentina",
    ciudad: "Buenos Aires",
    edificio: {
        piso: "8vo",
        nombre: "Edificio Principal"
    }   
};

console.log(saludarFunciones);

//funciones como objetos - funciones constructoras

function Persona(nombre, apellido){ 
    console.log("Me ejecutaron");
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.pais = "Argentina";
    this.imprimirInfo = function(){
        console.log(`${this.nombre} ${this.apellido} (${this.edad})`);
    }
}

const juan = new Persona("Juan", "Perez");
const melissa = new Persona("Melissa", "Flores");

console.log(juan);
console.log(melissa);

juan.imprimirInfo();
melissa.imprimirInfo();

