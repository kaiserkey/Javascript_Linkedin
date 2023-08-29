"use strict"

//eventos javascript 
const boton = document.getElementById("boton");

boton.addEventListener("click", ()=>{
    alert("Has pulsado el botón");
});

boton.addEventListener("mouseover", ()=> {
    alert("Has pasado el ratón por encima");
});
