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
    if (nombre.value != "" && apellidos.value != "" && puesto.value != "") {
        if (window.XMLHttpRequest) {
            peticion_http = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (document.addEventListener) {
            peticion_http.addEventListener("readystatechange", gestionarRespuesta);
        } else if (document.attachEvent) {
            peticion_http.attachEvent("onreadystatechange", gestionarRespuesta);
        }

        datos = new FormData();
        datos.append("nombre", nombre.value);
        datos.append("apellidos", apellidos.value);
        datos.append("puesto", puesto.value);

        peticion_http.open("POST", "php/php.php");
        peticion_http.send(datos);
    }
}

function gestionarRespuesta() {
    if (peticion_http.readyState == 4 && peticion_http.status == 200) {
        sueldo.value = peticion_http.responseText;
    }
}