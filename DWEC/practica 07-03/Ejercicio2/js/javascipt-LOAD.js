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
		$("#contenido").load("php/php.php?"+$.param({"nom":nombre,"ape": ape,"mod":mod}),function(valor){$("#nota").val(valor)});
	}
}