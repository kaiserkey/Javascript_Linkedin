"strict mode"

//condicionales
// if-else
var edad = 19;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}
// if anidados (mala práctica) 

//if sin llaves, se usa cuando solo hay una línea de código
var edad = 18;

if (edad === 18) console.log("Puedes votar, será tu primera votación");
else if (edad > 18) console.log("Puedes votar de nuevo");
else console.log("Aún no puedes votar");

//operador ternario se usa para asignar un valor a una variable dependiendo de una condición
var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";
console.log(resultado);

//switch
var numero = 1;

switch (numero) {
    case 1: 
        console.log("Soy uno");
        break;
    case 2:
        console.log("Soy un dos");
        break;
    default:
        console.log("No soy nada");
}

var num = 5;
var i = 0;
var texto = "";

while (i < num) {
    texto = texto + "*";
    console.log(texto);
    i ++;
}