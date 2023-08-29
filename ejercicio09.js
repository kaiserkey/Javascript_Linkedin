"use strict"

//setInterval
function setColor(){
    let pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "red" ? "green" : "red";
}

var temporizador = setInterval(setColor, 2000);

function stopChangeColor(){}