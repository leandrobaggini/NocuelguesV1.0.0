//Botones FLOW experiencia AR.
$("#btnSiguiente").click(function(){
    console.log("Boton uno");
    $(".cuadrosDialogo_1").fadeOut("slow");
    $(".cuadrosDialogo_2").fadeIn("slow");
});

$("#btnIra").click(function(){
    console.log("Boton dos");
    $(".cuadrosDialogo_2").fadeOut("slow");
    $(".cuadrosDialogo_3").fadeIn("slow");
});

$("#btnVerificar").click(function(){
    console.log("Boton tres");
    $(".cuadrosDialogo_3").fadeOut("slow");
    $(".obtener").fadeIn("slow");
});

$("#btnObtener").click(function(){
    $(".obtener").fadeOut("slow");
    $(".goldticket").fadeIn("slow");
});

//boton al menu selector.
/*
$(".btnIni").click(function(){
    console.log("Paso experincia AR");
    $("#menuPrincipal").fadeOut("slow");
    $("#experienciaAR").fadeIn("slow");
});*/

/* $ = (queryString) => document.querySelector(queryString);

const animate = () =>{
    const position = `0 ${1.5 + Math.sin(Date.now()/1000)}-2`; 
    $('a-entity').setAttribute('position', position);
};

requestAnimationFrame(animate);*/