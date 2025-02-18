$(window).on("load",inicio);

function inicio(){
    $("#calcular").on("click",comprobarTabla);
}
function comprobarTabla(){
    let tabla = $("#tablaCoches");
    let contenidoTabla = tabla.find("tbody");
    let filasTabla = contenidoTabla.find("tr");
    if(filasTabla.length > 0){
        generarObjeto(filasTabla);
    }else{
        alert("No hay Ningun Vehiculo");
    }
}
function generarObjeto(filasTabla){
    let objeto = new Array();
    for (let i = 0; i < filasTabla.length; i++) {
        objeto[i] = new Object();
        let contenidoFilas = filasTabla.eq(i).find("td");
        objeto[i].moto = contenidoFilas.eq(0).text();
        objeto[i].velocidad = contenidoFilas.eq(1).text();
        objeto[i].aceleracion = contenidoFilas.eq(2).text();
        objeto[i].tiempo = contenidoFilas.eq(3).text();
    }

    let objetoJSON = JSON.stringify(objeto);
    
    let objetoAJAX = {
        method : "POST",
        data:objetoJSON,
        dataType : "json",
        success:recuperarDatos
    }

    $.ajax("php/distancia.php",objetoAJAX);
}
function recuperarDatos(dato){
    let tabla = $("#tablaCoches");
    let contenido = tabla.find("tbody");
    let filas = contenido.find("tr");
    for (let i = 0; i < filas.length; i++) {
        let contenidoFilas = filas.eq(i).find("td");
        contenidoFilas.eq(4).text(dato[i].distancia);
    }
}