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
    let nombre = document.getElementById("nombre").value;
    let ape = document.getElementById("apellidos").value;
    let mod = document.getElementById("modulo").value;
    let nota = document.getElementById("nota").value;
    if(nombre && ape && mod && nota)
    {
        let objetoFetch={
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:"nombre="+nombre+"&apellidos="+ape+"&modulo="+mod+"&nota="+nota
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


function mostrarContenido(dato)
{
    document.getElementById("notaTexto").value=dato;
}

function errores(){
    alert("Error en la conexión");
}