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
		axios.get("php/php.php?nom="+nombre+"&ape="+ape+"&mod="+mod)
			.then(mostrarContenido)
			.catch(errores);
	}
}

function mostrarContenido(dato)
{
	document.getElementById("nota").value=(dato.data);
}

function errores(){
	alert("Error en la conexión");
}