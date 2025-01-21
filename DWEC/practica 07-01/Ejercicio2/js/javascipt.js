if (document.addEventListener)
	window.addEventListener("load",inicio)
else if (document.attachEvent)
	window.attachEvent("onload",inicio)

function inicio()
{
    
    let boton = document.getElementById("boton");
    if (document.addEventListener)
        boton.addEventListener("click",mandar);
    else if (document.attachEvent)
        boton.attachEvent("onclick",mandar);
}

function mandar()
{
    let nombre = document.getElementById("nombre").value;
    let ape = document.getElementById("apellidos").value;
    let mod = document.getElementById("modulo").value;
	if(nombre && ape && mod)
	{
		let conexion;
		if(window.XMLHttpRequest)
			conexion = new XMLHttpRequest();
		else if(window.XMLHttpRequest)
			conexion =  new ActiveXObject("Microsoft.XMLHTTP");

		if (document.addEventListener)
			conexion.addEventListener("readystatechange",mostrarContenido);
		else if (document.attachEvent)
			conexion.addEventListener("onreadystatechange",mostrarContenido);

		conexion.open("GET","php/php.php?nom="+nombre+"&ape="+ape+"&mod="+mod);
		conexion.send(null);
	}
}

function mostrarContenido(evento)
{
    if (evento.target.readyState==4)
		if (evento.target.status==200)
			document.getElementById("nota").value=(evento.target.responseText);	
}