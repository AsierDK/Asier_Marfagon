var marcaselect;
var dimensionselect;

if (document.addEventListener) {
    window.addEventListener("load", inicio);
} else if (document.attachEvent) {
    window.attachEvent("onload", inicio);
}

function inicio() {
    crearOpciones();
    marcaselect = document.getElementById("marca");
    dimensionselect = document.getElementById("dimension");

    if (document.addEventListener) {
        marcaselect.addEventListener("input", enviarPeticionAJAX);
        dimensionselect.addEventListener("input", enviarPeticionAJAX);
    } else if (document.attachEvent) {
        marcaselect.attachEvent("oninput", enviarPeticionAJAX);
        dimensionselect.attachEvent("oninput", enviarPeticionAJAX);
    }
}

function crearOpciones() {
    let peticion_http;

    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (document.addEventListener) {
        peticion_http.addEventListener("readystatechange", gestionarRespuestaOpciones);
    } else if (document.attachEvent) {
        peticion_http.attachEvent("onreadystatechange", gestionarRespuestaOpciones);
    }

    peticion_http.open("GET", "php/obtenerDatos.php", true);
    peticion_http.send(null);
}

function enviarPeticionAJAX() {
    if (marcaselect.value != "" && dimensionselect.value != "") {
        let peticion_http;

        if (window.XMLHttpRequest) {
            peticion_http = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (document.addEventListener) {
            peticion_http.addEventListener("readystatechange", gestionarRespuestaPrecio);
        } else if (document.attachEvent) {
            peticion_http.attachEvent("onreadystatechange", gestionarRespuestaPrecio);
        }

        marcaselect.disabled = true;
        dimensionselect.disabled = true;

        peticion_http.open("POST", "php/obtenerPrecio.php", true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        let data = `<modelo><marca>${marcaselect.value}</marca><dimension>${dimensionselect.value}</dimension></modelo>`;
        peticion_http.send(data);
    }
}

function gestionarRespuestaOpciones(event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
        let respuestaXML = event.target.responseXML;

        let marcas = respuestaXML.getElementsByTagName("marca");
        for (let i = 0; i < marcas.length; i++) {
            let opcion = document.createElement("option");
            opcion.value = marcas[i].textContent;
            opcion.textContent = marcas[i].textContent;
            document.getElementById("marca").appendChild(opcion);
        }

        let dimensiones = respuestaXML.getElementsByTagName("dimension");
        for (let i = 0; i < dimensiones.length; i++) {
            let opcion = document.createElement("option");
            opcion.value = dimensiones[i].textContent;
            opcion.textContent = dimensiones[i].textContent;
            document.getElementById("dimension").appendChild(opcion);
        }
    }
}

function gestionarRespuestaPrecio(event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
        let respuestaXML = event.target.responseXML;
        let precio = respuestaXML.getElementsByTagName("precio")[0].textContent;
        document.getElementById("precio").value = precio;
        marcaselect.disabled = false;
        dimensionselect.disabled = false;
    }
}