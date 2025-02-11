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
    let objetoFetch={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:"parametro=cargar"
    }

    fetch("php/php.php" ,objetoFetch)
        .then(correcto1)
        .catch(errores);

}

function correcto1(respuesta){
    if (respuesta.ok)
        respuesta.text().then(cargarContenido);
}

function errores(){
    alert("Error en la conexión");
}

function enviarPeticionAJAX() {
    let marcaTV = document.getElementById("marcaTV").value;
    let medidasTV = document.getElementById("medidasTV").value;
    if(marcaTV && medidasTV)
    {
        let datos = `<televisiones><television><marca>${marcaTV}</marca><dimension>${medidasTV}</dimension></television></televisiones>`;
        let objetoFetch={
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:"cadenaXML="+datos
        }

        fetch("php/php.php" ,objetoFetch)
            .then(correcto2)
            .catch(errores);
    }
}

function correcto2(respuesta){
    if (respuesta.ok)
        respuesta.text().then(mostrarContenido);
}

function errores(){
    alert("Error en la conexión");
}

function mostrarContenido(dato)
{
    let parser = new DOMParser();
    let xml = parser.parseFromString(dato, "application/xml");
    let cadenaXML=xml.getElementsByTagName("television");
    document.getElementById("precio").value = cadenaXML.item(0).getElementsByTagName("precio").item(0).textContent;
}

function cargarContenido(event) {
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