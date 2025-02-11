var peticion_http;
var nombre;
var apellidos;
var puesto;
var sueldo;
var datos;

if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}

function inicio() {
    let boton = document.getElementById("obtener");
    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    puesto = document.getElementById("puesto");
    sueldo = document.getElementById("sueldo");

    if (document.addEventListener) {
        boton.addEventListener("click", enviarPeticionAJAX);
    } else if (document.attachEvent) {
        boton.attachEvent("onclick", enviarPeticionAJAX);
    }
}

function enviarPeticionAJAX() {
    let nombre = document.getElementById("nombre").value;
    let ape = document.getElementById("apellidos").value;
    let puesTra = document.getElementById("puesTra").value;
    if(nombre && ape && puesTra)
    {
        let datos = new FormData();
        datos.append("nombre",nombre);
        datos.append("ape",ape);
        datos.append("puesTra",puesTra);
        let objetoFetch={
            method:"POST",
            body:datos
        }

        fetch("php/php.php" ,objetoFetch)
            .then(correcto)
            .catch(errores);
    }
}

function correcto(respuesta){
    if (respuesta.ok)
        respuesta.text().then(mostrarContenido);
}

function errores(){
    alert("Error en la conexión");
}

function mostrarContenido(dato)
{
    document.getElementById("sueldo").value=(dato);
}