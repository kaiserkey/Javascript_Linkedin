"use strict"

//eventos javascript 
const boton = document.getElementById("boton");

boton.addEventListener("click", ()=>{
    console.log("Has pulsado el botón");
});

boton.addEventListener("mouseover", ()=> {
    console.log("Has pasado el ratón por encima");
});

boton.addEventListener("mouseout", ()=> {
    console.log("Has salido del botón");
});

