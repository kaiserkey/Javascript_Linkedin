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

// if anidados
var edad = 18;
if (edad === 18) {
    console.log("Puedes votar, será tu primera votación");
    
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}

//operador ternario
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