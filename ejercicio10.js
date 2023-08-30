"use strict"
//Alertas y ventanas emergentes
var boton = document.getElementsByTagName("button")[0];

boton.addEventListener("click", ()=>{ 
    alert("Esto es una ventana de alerta");
});

var boton2 = document.getElementsByTagName("button")[1];

boton2.addEventListener("click", ()=>{ 
    let booconfirm("Esto es una ventana de confirmación");
});