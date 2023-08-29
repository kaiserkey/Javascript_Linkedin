"use strict"

//eventos javascript 
const boton = document.getElementById("boton");

//evento click (cuando se pulsa el botón)
boton.addEventListener("click", (event)=>{
    console.log("Has pulsado el botón");
    console.log
});

//evento mouseover (cuando se pasa el ratón por encima del botón)
boton.addEventListener("mouseover", (event)=> {
    console.log("Has pasado el ratón por encima");
});

//evento mouseout (cuando se sale del botón)
boton.addEventListener("mouseout", (event)=> {
    console.log("Has salido del botón");
});

//evento keydown (cuando se pulsa una tecla)
const input = document.getElementsByTagName("input");

//el input 0 es el primer input del documento
input[0].addEventListener("keydown", (event)=> { 
    console.log("Has pulsado una tecla");
    console.log(event.key);
});

//evento keyup (cuando se suelta una tecla)
input[0].addEventListener("keyup", (event)=> { 
    console.log("Has soltado una tecla");
});

//evento keypress (cuando se pulsa una tecla)
input[0].addEventListener("keypress", (event)=> { 
    console.log("Estás pulsando una tecla");
});





