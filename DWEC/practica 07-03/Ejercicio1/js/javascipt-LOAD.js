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
    $("#contenido").load("php/ejercicio1.php?"+$.param({"ciudad":ciudad}));
}
