if (document.addEventListener)
    window.addEventListener("load",inicio)
else if (document.attachEvent)
    window.attachEvent("onload",inicio)

function inicio(){
    let sevilla = document.getElementById("sevilla");
    let cantabria = document.getElementById("cantabria");
    let cordoba = document.getElementById("cordoba");
    let segovia = document.getElementById("segovia");

    if (document.addEventListener){
        sevilla.addEventListener("click",function(){php("sevilla.html");});
        cantabria.addEventListener("click",function(){php("cantabria.txt");});
        cordoba.addEventListener("click",function(){php("cordoba.txt");});
        segovia.addEventListener("click",function(){php("segovia.html");});
    }
    else if (document.attachEvent){
        sevilla.attachEvent("onclick",function(){php("sevilla.html");});
        cantabria.attachEvent("onclick",function(){php("cantabria.txt");});
        cordoba.attachEvent("onclick",function(){php("cordoba.txt");});
        segovia.attachEvent("onclick",function(){php("segovia.html");});

    }
}

function php(ciudad){
    axios.get("php/ejercicio1.php?ciudad="+ciudad)
        .then(mostrarContenido)
        .catch(errores);
}

function mostrarContenido(dato)
{
    document.getElementById("contenido").textContent=dato.data;
}

function errores(){
    alert("Error en la conexión");
}