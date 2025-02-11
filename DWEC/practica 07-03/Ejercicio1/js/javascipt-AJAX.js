$(window).on("load",inicio);

function inicio()
{
    $("#sevilla").on("click",function(){mandar("sevilla.html");});
    $("#cantabria").on("click",function(){mandar("cantabria.txt");});
    $("#cordoba").on("click",function(){mandar("cordoba.txt");});
    $("#segovia").on("click",function(){mandar("segovia.html");});
}

function mandar(ciudad)
{
    let objetoAjax={
		method:"GET",
        data:{"ciudad":ciudad},
		success:mostrarContenido
	}
	
	$.ajax("php/ejercicio1.php",objetoAjax);

}

function mostrarContenido(dato)
{
    $("#contenido").text(dato);	
}
