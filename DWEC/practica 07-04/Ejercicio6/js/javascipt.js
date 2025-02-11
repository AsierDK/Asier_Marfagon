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


function cargarContenido(dato)
{
	let cadenaJSON=JSON.parse(dato);
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

function mandar()
{
	let marca = document.getElementById("marca").value;
	let electrodomestico = document.getElementById("electrodomestico").value;
	if(marca && electrodomestico)
	{
		let json=new Object();

		json.marca = marca;
		json.electrodomestico = electrodomestico;
		let cadenaJson=JSON.stringify(json);

		let objetoFetch={
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body:cadenaJson,
			cache:"no-cache"
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

function mostrarContenido(dato)
{
	let cadenaJSON=JSON.parse(dato);
	let ancho;let alto;let fondo;
	ancho = cadenaJSON.ancho;
	alto = cadenaJSON.alto;
	fondo = cadenaJSON.fondo;
	document.getElementById("ancho").value = ancho + "cm";
	document.getElementById("alto").value = alto + "cm";
	document.getElementById("fondo").value = fondo + "cm";
}