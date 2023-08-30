"use strict"
//Alertas y ventanas emergentes
var boton = document.getElementsByTagName("button")[0];

boton.addEventListener("click", ()=>{ 
    var ventana = window.open("https://www.google.com", "Ventana emergente", "width=400, height=300");
    ventana.moveTo(100, 100);
    ventana.resizeTo(500, 500);
});