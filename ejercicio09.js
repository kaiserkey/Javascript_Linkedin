"use strict"

function setColor(){
    let pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "red" ? "green" : "red";
}

function stopChangeColor(){
    console.log("Se detuvo el cambio de color");
    clearInterval(temporizador);
}

//setInterval sirve para ejecutar una función cada cierto tiempo
var temporizador = setInterval(setColor, 2000);
//setTimeout sirve para ejecutar una función una sola vez después de cierto tiempo
var temporizador2 = setTimeout(stopChangeColor, 6000);
