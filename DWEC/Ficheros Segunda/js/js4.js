if(document.addEventListener)
    window.addEventListener("load",inicio);
else if(document.attachEvent)
    window.attachEvent("onload",inicio);

function inicio(){
    let btnCalcular = document.getElementById("calcular");
    if(document.addEventListener)
        btnCalcular.addEventListener("click",tabla);
    else if(document.attachEvent)
        btnCalcular.attachEvent("onclick",tabla);
}
function tabla(){
    let tabla = document.getElementById("tablaCoches");
    let contenido = tabla.getElementsByTagName("tbody");
    let filas = contenido.item(0).getElementsByTagName("tr");
    if(filas.length > 0){
        xml(filas);
    }
    else{
        alert("No hay vehiculos");
    }
}
function xml(filas){
    let cadenaXML = "<resultado>";
    for (let i = 0; i < filas.length; i++){
        let contenidoTabla= filas.item(i).getElementsByTagName("td");
        cadenaXML = cadenaXML+"<vehiculos><coche>"
        +contenidoTabla.item(0).textContent+"</coche><velocidad>"
        +contenidoTabla.item(1).textContent+"</velocidad><aceleracion>"
        +contenidoTabla.item(2).textContent+"</aceleracion><tiempo>"
        +contenidoTabla.item(3).textContent+"</tiempo></vehiculos>";
    }
    cadenaXML = cadenaXML + "</resultado>";
    
    let objetoFetch = {
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:cadenaXML
    }

    fetch("php/velocidad.php" ,objetoFetch)
        .then(correcto)
        .catch(error);
}
function error(){
    alert ("Error de conexion");
}
function correcto(respuesta){
    if (respuesta.ok)
		respuesta.text().then(recuperar);
}
function recuperar(dato){
    let tabla = document.getElementById("tablaCoches");
    let contenidoTabla=tabla.getElementsByTagName("tbody");
    let filas=contenidoTabla.item(0).getElementsByTagName("tr");
    let parser = new DOMParser();
    let xml = parser.parseFromString(dato, "application/xml");
	let cadenaXML=xml.getElementsByTagName("resultado");
    let contenido = cadenaXML.item(0).getElementsByTagName("vehiculos");
    for (let i = 0; i < filas.length; i++) {
        let xontenidoFilas=filas.item(i).getElementsByTagName("td");
        xontenidoFilas.item(4).textContent = contenido.item(i).getElementsByTagName("velfinal").item(0).textContent;
    }
}