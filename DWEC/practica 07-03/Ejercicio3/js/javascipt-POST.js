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
	let nota =$("#nota").val();
	if(nombre && ape && mod && nota)
	{
		$.post("php/php.php",{"nom":nombre,"ape": ape,"mod":mod,"nota":nota},mostrarContenido);
	}
}

function mostrarContenido(dato)
{
    let notaTexto = tranformarNota(dato);
	$("#notaTexto").val(notaTexto);	
}

function tranformarNota(notaTexto)
{
	let resultado;
	switch (notaTexto) {
		case "cinco":
			resultado = "SUFICIENTE";
			break;
		case "seis":
			resultado = "BIEN";
			break;
		case "siete": case "ocho" :
			resultado = "NOTABLE";
			break;
		case "nueve": case "diez" :
			resultado = "SOBRESALIENTE";
			break;
		default:
			resultado = "SUSPENSO";
			break;
	}
	return resultado;
}