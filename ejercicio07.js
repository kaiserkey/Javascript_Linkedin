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

//parametro de tipo callback - funciones que se ejecutan despues de un evento

const btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", function(){
    console.log("Saludando");
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

//funciones como objetos - funciones constructoras - prototipos

function Persona2(nombre, apellido){
    console.log("Me ejecutaron");
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.pais = "Argentina";
}

Persona2.prototype.imprimirInfo = function(){
    console.log(`${this.nombre} ${this.apellido} (${this.edad})`);
}

const juan2 = new Persona2("Juan", "Perez");
const melissa2 = new Persona2("Melissa", "Flores");

console.log(juan2);
console.log(melissa2);

juan2.imprimirInfo();
melissa2.imprimirInfo();

//funciones como objetos - funciones constructoras - prototipos - herencia

function Persona3(nombre, apellido){
    console.log("Me ejecutaron");
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.pais = "Argentina";
}

Persona3.prototype.imprimirInfo = function(){
    console.log(`${this.nombre} ${this.apellido} (${this.edad})`);
}

const juan3 = new Persona3("Juan", "Perez");
const melissa3 = new Persona3("Melissa", "Flores");

console.log(juan3);
console.log(melissa3);

juan3.imprimirInfo();
melissa3.imprimirInfo();

function Profesor(nombre, apellido, pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
}

Profesor.prototype = new Persona3();

const carlos = new Profesor("Carlos", "Perez", "Colombia");

console.log(carlos);

carlos.imprimirInfo();

//funciones como objetos - funciones constructoras - prototipos - herencia - super

function Persona4(nombre, apellido){
    console.log("Me ejecutaron");
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.pais = "Argentina";
}

Persona4.prototype.imprimirInfo = function(){
    console.log(`${this.nombre} ${this.apellido} (${this.edad})`);
}

const juan4 = new Persona4("Juan", "Perez");
const melissa4 = new Persona4("Melissa", "Flores");

console.log(juan4);
console.log(melissa4);

juan4.imprimirInfo();
melissa4.imprimirInfo();

function Profesor2(nombre, apellido, pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
}

Profesor2.prototype = new Persona4();

const carlos2 = new Profesor2("Carlos", "Perez", "Colombia");

console.log(carlos2);

carlos2.imprimirInfo();

function Profesor3(nombre, apellido, pais, curso){
    this.super = Persona4;
    this.super(nombre, apellido, pais);
    this.curso = curso;
}

Profesor3.prototype = new Persona4();

const carlos3 = new Profesor3("Carlos", "Perez", "Colombia", "Programacion");

console.log(carlos3);

carlos3.imprimirInfo();

//funciones como objetos - funciones constructoras - prototipos - herencia - super - call

function Persona5(nombre, apellido){
    console.log("Me ejecutaron");
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20;
    this.pais = "Argentina";
}

Persona5.prototype.imprimirInfo = function(){
    console.log(`${this.nombre} ${this.apellido} (${this.edad})`);
}



