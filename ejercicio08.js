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





