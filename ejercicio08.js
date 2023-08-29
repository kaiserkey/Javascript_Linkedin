"use strict"

//eventos javascript 
const boton = document.getElementById("boton");

//evento click (cuando se pulsa el botón)
boton.addEventListener("click", ()=>{
    console.log("Has pulsado el botón");
});

//evento mouseover (cuando se pasa el ratón por encima del botón)
boton.addEventListener("mouseover", ()=> {
    console.log("Has pasado el ratón por encima");
});

//evento mouseout (cuando se sale del botón)
boton.addEventListener("mouseout", ()=> {
    console.log("Has salido del botón");
});

//evento keydown (cuando se pulsa una tecla)
const input = document.getElementsByTagName("input");

//el input 0 es el primer input del documento
input[0].addEventListener("keydown", ()=> { 
    console.log("Has pulsado una tecla");
});

//evento keyup (cuando se suelta una tecla)
input[0].addEventListener("keyup", ()=> {





