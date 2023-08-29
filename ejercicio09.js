"use strict"

function setColor(){
    let pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "red" ? "green" : "red";
}

//setInterval sirve para ejecutar una función cada cierto tiempo
var temporizador = setInterval(setColor, 2000);
var temporizador
function stopChangeColor(){}