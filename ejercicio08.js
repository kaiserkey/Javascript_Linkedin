"use strict"

//eventos javascript 
const boton = document.getElementById("boton");

boton.addEventListener("click", function(){
    alert("Has pulsado el botón");
});

boton.addEventListener("mouseover", function(){
    alert("Has pasado el ratón por encima");
});
