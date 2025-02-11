$(window).on("load",inicio);

function inicio()
{   
    $("#boton").on("click",mandar);
}

function mandar()
{
    let nombre = $("#nombre").val();
    let ape = $("#apellidos").val();
    let puesTra = $("#puesTra").val();
	if(nombre && ape && puesTra)
	{
		let datos = new FormData();
		datos.append("nombre",nombre);
		datos.append("ape",ape);
		datos.append("puesTra",puesTra);
		let objetoAjax={
			method:"POST",
			data:datos,
			contentType:false,
			processData:false,
			success:mostrarContenido
		}

		$.ajax("php/php.php",objetoAjax);
	}
}

function mostrarContenido(dato)
{
	$("#sueldo").val(dato);	
}