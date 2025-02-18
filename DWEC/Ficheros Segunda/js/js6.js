if(document.addEventListener)
    window.addEventListener("load",inicio);
else if(document.attachEvent)
    window.attachEvent("onload",inicio);

function inicio(){
    let equipo = document.getElementById("equipos");
    let temporada = document.getElementById("temporadas");
    if(document.addEventListener){
        equipo.addEventListener("change",compV);
        temporada.addEventListener("change",compV);
    }else if(document.attachEvent){
        equipo.attachEvent("onchange",compV);
        temporada.attachEvent("onchange",compV);
    }   
}
function compV(){
    let equipo = document.getElementById("equipos").value;
    let temporada = document.getElementById("temporadas").value;
    if(equipo!="" && temporada!="")
    {
        let cadena = "<datos><resultado><equipo>"+equipo+"</equipo><temporada>"+temporada+"</temporada></resultado></datos>";
        let conexion;
        if(window.XMLHttpRequest){
			conexion = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            conexion =  new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (document.addEventListener){
            conexion.addEventListener("readystatechange",recuperarC);
        }else if (document.attachEvent){
            conexion.addEventListener("onreadystatechange",recuperarC);
        }
			

        conexion.open("POST","php/resultados.php");
		conexion.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		conexion.send(cadena);
    }
}
function recuperarC(evento){
    if (evento.target.readyState==4){
		if (evento.target.status==200){
			let cadenaXML = evento.target.responseXML.getElementsByTagName("datos");
            let cont = cadenaXML.item(0).getElementsByTagName("resultado");
            document.getElementById("puesto").value = cont.item(0).getElementsByTagName("puesto").item(0).textContent;
            document.getElementById("puntos").value = cont.item(0).getElementsByTagName("puntos").item(0).textContent;
            document.getElementById("ganados").value = cont.item(0).getElementsByTagName("ganados").item(0).textContent;
            document.getElementById("perdidos").value = cont.item(0).getElementsByTagName("perdidos").item(0).textContent;
            document.getElementById("empatados").value = cont.item(0).getElementsByTagName("empatados").item(0).textContent;
            document.getElementById("favor").value = cont.item(0).getElementsByTagName("favor").item(0).textContent;
            document.getElementById("contra").value = cont.item(0).getElementsByTagName("contra").item(0).textContent;
		}
    }
}