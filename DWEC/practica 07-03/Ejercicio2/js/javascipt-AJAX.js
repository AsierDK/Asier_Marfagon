$(window).on("load",inicio);

function inicio()
{
    
    $("#boton").on("click",mandar);
}

function mandar()
{
    let nombre = $("#nombre").val();
    let ape = $("#apellidos").val();
    let mod = $("#modulo").val();
	if(nombre && ape && mod)
	{
		let objetoAjax={
			method:"GET",
			data:{"nom":nombre,"ape":ape,"mod":mod},
			success:mostrarContenido
		}
		
		$.ajax("php/php.php",objetoAjax);
	}
}

function mostrarContenido(dato)
{
    $("#nota").val(dato);	
}
