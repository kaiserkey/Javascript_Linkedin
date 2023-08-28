"strict mode"

//condicionales
// if-else
var edad = 18;

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

//switch
var numero = 1;
var resultado;

switch (numero) {
    case 1: 
        resultado = "Soy uno";
        break;
    case 2:
        resultado = "Soy un dos";
        break;
    default:
        resultado = "No soy nada";
}