if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio)

function inicio()
{
    
    let boton = document.getElementById("boton");
    if (document.addEventListener)
        boton.addEventListener("click",php);
    else if (document.attachEvent)
        boton.attachEvent("onclick",php);
}

function php()
{
    let nombre = document.getElementById("nombre").value;
    let ape = document.getElementById("apellidos").value;
    let mod = document.getElementById("modulo").value;
	if(nombre && ape && mod)
	{
		let objetoFetch={
			method:"GET",
			headers:{"Content-Type":"application/x-www-form-urlencoded"}
		}
		fetch("php/php.php?nom="+nombre+"&ape="+ape+"&mod="+mod, objetoFetch)
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
	document.getElementById("nota").value=(dato);
}

function errores(){
	alert("Error en la conexión");
}