"use strict"
//Alertas y ventanas emergentes
var boton = document.getElementsByTagName("button")[0];

boton.addEventListener("click", ()=>{ 
    alert("Esto es una ventana de alerta");
});

var boton2 = document.getElementsByTagName("button")[1];

boton2.addEventListener("click", ()=>{ 
    let valor = confirm("Esto es una ventana de confirmación");
    console.log(valor);
    if (valor){
        alert("Has pulsado aceptar");  
    }else{
        alert("Has pulsado cancelar");
    }
});

var boton3 = document.getElementsByTagName("button")[2];

boton3.addEventListener("click", ()=>{