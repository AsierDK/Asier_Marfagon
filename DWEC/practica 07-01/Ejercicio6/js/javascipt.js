if (document.addEventListener)
{
	window.addEventListener("load",inicio)
}
else if (document.attachEvent)
{
	window.attachEvent("onload",inicio)
}

function inicio()
{
    solicitarDatos();
    let marca = document.getElementById("marca");
	let electrodomestico = document.getElementById("electrodomestico");
    if (document.addEventListener)
	{
        marca.addEventListener("input",mandar);
		electrodomestico.addEventListener("input",mandar);
	}
    else if (document.attachEvent)
	{
        marca.attachEvent("oninput",mandar);
		electrodomestico.attachEvent("oninput",mandar);
	}
}

function solicitarDatos()
{
	let conexion;
	if(window.XMLHttpRequest)
		conexion = new XMLHttpRequest();
	else if(window.XMLHttpRequest)
		conexion =  new ActiveXObject("Microsoft.XMLHTTP");

	if (document.addEventListener)
		conexion.addEventListener("readystatechange",cargarContenido);
	else if (document.attachEvent)
		conexion.addEventListener("onreadystatechange",cargarContenido);

	conexion.open("POST","php/php.php");
	conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	conexion.send("parametro=cargar");
}

function cargarContenido(evento)
{
	if (evento.target.readyState==4)
		if (evento.target.status==200)
		{
			let cadenaJSON = JSON.parse(evento.target.responseText);
			let marca1;let marca2;let marca3;let marca4;
			marca1 = document.createElement("option");
			marca1.setAttribute("value",cadenaJSON.marca.Samsung)
			marca1.append(cadenaJSON.marca.Samsung);
			marca2 = document.createElement("option");
			marca2.setAttribute("value",cadenaJSON.marca.Bosch)
			marca2.append(cadenaJSON.marca.Bosch);
			marca3 = document.createElement("option");
			marca3.setAttribute("value",cadenaJSON.marca.Hisense)
			marca3.append(cadenaJSON.marca.Hisense);
			marca4 = document.createElement("option");
			marca4.setAttribute("value",cadenaJSON.marca.LG)
			marca4.append(cadenaJSON.marca.LG);
			document.getElementById("marca").appendChild(marca1);
			document.getElementById("marca").appendChild(marca2);
			document.getElementById("marca").appendChild(marca3);
			document.getElementById("marca").appendChild(marca4);
		}
}

function mandar()
{
    let marca = document.getElementById("marca").value;
    let electrodomestico = document.getElementById("electrodomestico").value;
	if(marca && electrodomestico)
	{
		let conexion;
		let json=new Object();
		if(window.XMLHttpRequest)
			conexion = new XMLHttpRequest();
		else if(window.XMLHttpRequest)
			conexion =  new ActiveXObject("Microsoft.XMLHTTP");

		if (document.addEventListener)
			conexion.addEventListener("readystatechange",mostrarContenido);
		else if (document.attachEvent)
			conexion.addEventListener("onreadystatechange",mostrarContenido);

		json.marca = marca;
		json.electrodomestico = electrodomestico;
		conexion.open("POST","php/php.php");
		conexion.setRequestHeader("Content-Type","application/json");
		let cadenaJson=JSON.stringify(json);
		conexion.send(cadenaJson);
	}
}

function mostrarContenido(evento)
{
    if (evento.target.readyState==4)
		if (evento.target.status==200)
		{
			let cadenaJSON = JSON.parse(evento.target.responseText);
			let ancho;let alto;let fondo;
			ancho = cadenaJSON.ancho;
			alto = cadenaJSON.alto;
			fondo = cadenaJSON.fondo;
			document.getElementById("ancho").value = ancho + "cm";
			document.getElementById("alto").value = alto + "cm";
			document.getElementById("fondo").value = fondo + "cm";
		}
}