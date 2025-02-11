$(window).on("load",inicio);

function inicio()
{   
    solicitarDatos();
	$("#boton").on("click",mandar);
}

function solicitarDatos()
{
	
	let objetoAjax={
		method:"POST",
		data:{"parametro":"cargar"},
		success:cargarContenido
	}
	
	$.ajax("php/php.php",objetoAjax);

}

function cargarContenido(dato)
{
	// let parser = new DOMParser();
	// let xml = parser.parseFromString(dato, "application/xml");
	let cadenaXML=dato.getElementsByTagName("television");
	let marcaTV = $("#marcaTV");
	let medidasTV = $("#medidasTV");
	marcaTV.append(`<option value='${cadenaXML.item(0).getElementsByTagName("marca").item(0).textContent}'>${cadenaXML.item(0).getElementsByTagName("marca").item(0).textContent}</option>`);
	marcaTV.append(`<option value='${cadenaXML.item(1).getElementsByTagName("marca").item(0).textContent}'>${cadenaXML.item(1).getElementsByTagName("marca").item(0).textContent}</option>`);
	marcaTV.append(`<option value='${cadenaXML.item(2).getElementsByTagName("marca").item(0).textContent}'>${cadenaXML.item(2).getElementsByTagName("marca").item(0).textContent}</option>`);
	marcaTV.append(`<option value='${cadenaXML.item(3).getElementsByTagName("marca").item(0).textContent}'>${cadenaXML.item(3).getElementsByTagName("marca").item(0).textContent}</option>`);
	medidasTV.append(`<option value='${cadenaXML.item(0).getElementsByTagName("dimension").item(0).textContent}'>${cadenaXML.item(0).getElementsByTagName("dimension").item(0).textContent}</option>`);
	medidasTV.append(`<option value='${cadenaXML.item(1).getElementsByTagName("dimension").item(0).textContent}'>${cadenaXML.item(1).getElementsByTagName("dimension").item(0).textContent}</option>`);
	medidasTV.append(`<option value='${cadenaXML.item(2).getElementsByTagName("dimension").item(0).textContent}'>${cadenaXML.item(2).getElementsByTagName("dimension").item(0).textContent}</option>`);
	medidasTV.append(`<option value='${cadenaXML.item(3).getElementsByTagName("dimension").item(0).textContent}'>${cadenaXML.item(3).getElementsByTagName("dimension").item(0).textContent}</option>`);
}

function mandar()
{
    let marcaTV = $("#marcaTV").val();
    let medidasTV = $("#medidasTV").val();
	if(marcaTV && medidasTV)
	{
		let datos = `<televisiones><television><marca>${marcaTV}</marca><dimension>${medidasTV}</dimension></television></televisiones>`;
		
		let objetoAjax={
			method:"POST",
			data:{"cadenaXML":datos},
			headers:{"Content-Type":"application/x-www-form-urlencoded"},
			success:mostrarContenido
		}

		$.ajax("php/php.php",objetoAjax);
	}
}

function mostrarContenido(dato)
{
	// let parser = new DOMParser();
	// let xml = parser.parseFromString(dato, "application/xml");
	let cadenaXML=dato.getElementsByTagName("television");
	$("#precio").val(cadenaXML.item(0).getElementsByTagName("precio").item(0).textContent);
}