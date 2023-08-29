"use strict"

//eventos javascript 
const boton = document.getElementById("boton");

//evento click
boton.addEventListener("click", ()=>{
    console.log("Has pulsado el botón");
});

//evento mouseover
boton.addEventListener("mouseover", ()=> {
    console.log("Has pasado el ratón por encima");
});

//evento mouseout
boton.addEventListener("mouseout", ()=> {
    console.log("Has salido del botón");
});

//evento keydown

const input = document.getElementsByTagName("input");

//el input 0 es el primer input del documento
input[0].addEventListener("keydown", ()=> { 
    console.log("Has pulsado una tecla");
});





