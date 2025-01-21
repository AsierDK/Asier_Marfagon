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
    let conexion;
    if(window.XMLHttpRequest)
        conexion = new XMLHttpRequest();
    else if(window.XMLHttpRequest)
        conexion =  new ActiveXObject("Microsoft.XMLHTTP");

    if (document.addEventListener)
        conexion.addEventListener("readystatechange",mostrarContenido);
    else if (document.attachEvent)
        conexion.addEventListener("onreadystatechange",mostrarContenido);

    conexion.open("POST","php/ejercicio1.php");
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    conexion.send("ciudad="+ciudad);
}

function mostrarContenido(evento){
    if (evento.target.readyState==4)
		if (evento.target.status==200)
		{
			console.log(evento.target.responseText);
			document.getElementById("contenido").textContent=evento.target.responseText;	
		}
}