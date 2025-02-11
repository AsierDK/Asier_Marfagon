$(window).on("load",inicio);

function inicio()
{   
    solicitarDatos();
	$("#marca").on("input",mandar);
	$("#electrodomestico").on("input",mandar);
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
	let cadenaJSON=JSON.parse(dato);
	let marca = $("#marca");
	marca.append(`<option value='${cadenaJSON.marca.Samsung}'>${cadenaJSON.marca.Samsung}</option>`);
	marca.append(`<option value='${cadenaJSON.marca.Bosch}'>${cadenaJSON.marca.Bosch}</option>`);
	marca.append(`<option value='${cadenaJSON.marca.Hisense}'>${cadenaJSON.marca.Hisense}</option>`);
	marca.append(`<option value='${cadenaJSON.marca.LG}'>${cadenaJSON.marca.LG}</option>`);
}

function mandar()
{
    let marca = $("#marca").val();
    let electrodomestico = $("#electrodomestico").val();
	if(marca && electrodomestico)
	{
		let json=new Object();

		json.marca = marca;
		json.electrodomestico = electrodomestico;
		let cadenaJson=JSON.stringify(json);

		let objetoAjax={
			method:"POST",
			data:cadenaJson,
			success:mostrarContenido,
			dataType:"json"
		}

		$.ajax("php/php.php",objetoAjax);
	}
}


function mostrarContenido(dato)
{
	$("#ancho").val(dato.ancho + "cm");
	$("#alto").val(dato.alto + "cm");
	$("#fondo").val(dato.fondo + "cm");
}