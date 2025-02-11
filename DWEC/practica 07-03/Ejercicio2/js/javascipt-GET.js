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
		$.get("php/php.php",{"nom":nombre,"ape": ape,"mod":mod},mostrarContenido);
	}
}

function mostrarContenido(dato)
{
    $("#nota").val(dato);	
}