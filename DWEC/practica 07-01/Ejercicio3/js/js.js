var peticion_http;
var nombre;
var modulo;
var apellidos;
var nota1;
var nota2;

if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}

function inicio() {
    let boton = document.getElementById("obtener");
    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    modulo = document.getElementById("modulo");
    nota1 = document.getElementById("nota1");
    nota2 = document.getElementById("nota2");

    if (document.addEventListener) {
        boton.addEventListener("click", enviarPeticionAJAX);
    } else if (document.attachEvent) {
        boton.attachEvent("onclick", enviarPeticionAJAX);
    }
}

function enviarPeticionAJAX() {
    if (nombre.value != "" && modulo.value != "" && apellidos.value != "") {
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

        peticion_http.open("POST", "php/php.php");
        peticion_http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        peticion_http.send("nombre=" + nombre.value + "&apellidos=" + apellidos.value + "&modulo=" + modulo.value + "&nota1=" + nota1.value, true);
    }
}

function gestionarRespuesta() {
    if (peticion_http.readyState == 4 && peticion_http.status == 200) {
        nota2.value = peticion_http.responseText;
    }
}