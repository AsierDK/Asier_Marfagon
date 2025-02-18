if (document.addEventListener){
	window.addEventListener("load",inicio)
}
else if (document.attachEvent){
	window.attachEvent("onload",inicio);
}

function inicio(){
    let localidad=document.getElementById("localidad");
    let borrar = document.getElementById("borrar");
    if (document.addEventListener){
		localidad.addEventListener("click",localidades)
        borrar.addEventListener("click",borrarAnnadirP)

    }
	else if (document.attachEvent){
        localidad.attachEvent("onclick", localidades);
        borrar.addEventListener("click",borrarAnnadirP)

    }
}
function localidades(){
    let localidades=document.getElementById("localidad").value.trim();
    let localidad;
    console.log(localidades);
        switch (localidades) {
            case "Burgos":
                localidad = ["Arco de Santa María", "Monasterio de San Juan", "Puente de Santa María", "Arco de San Esteban", "Solar del Cid", "Arco de Fernán González", "Antiguo Seminario Mayor", "Monasterio de Santa María la Real de las Huelgas", "Catedral", "El Cid Campeador"];
                break;
            case "Córdoba":
                localidad = ["Mezquita-Catedral", "Alcázares de los Reyes Cristianos", "Medina Azahara", "Puente Romano",  "Caballerizas Reales", "Torre de la Calahorra", "Templo Romano", "Torre de la Malmuerta", "Alminar de San Juan", "Mausoleos Romanos", "Capilla de San Bartolomé"];
                break;
            case "A Coruña":
                localidad = ["Torre de Hércules", "Obelisco Millenium", "iglesia de las Capuchinas", "Castillo de San Antón", "Convento de Santa Bárbara", "Convento de Santo Domingo", "Iglesia de San Jorge", "iglesia de San Nicolás", "Colegiata de Santa María", "Iglesia de Santiago"];
                break;
            case "León":
                localidad = ["Catedral", "Basílica de San Isidoro", "Casa de Botines", "Convento de las Concepciones", "Cripta de Puerta Obispo", "Iglesia de los Padres Capuchinos", "Iglesia de Nuestra Señora del Camino", "Iglesia de San Marcelo", "Iglesia de Santa Ana"];
                break;
            case "Mérida":
                localidad = ["Teatro Romano", "Templo de Diana", "Acueducto de los Milagros", "Puente romano sobre el Guadiana", "Anfiteatro Romano", "Arco de Trajano", "Alcazaba árabe", "Basílica de Santa Eulalia",  "Foro romano", "Circo Romano", "Catedral de Santa María", "Puente romano sobre el Albarregas", "Templo de Marte"];
                break;
            case "Salamanca":
                localidad = ["Catedral Nueva", "Catedral Vieja", "Fachada de la Universidad", "Casa de las Conchas", "La Clerencia", "convento de San Esteban", "Plaza Mayor", "Casa Lis"];
                break;
            case "Segovia":
                localidad = ["Alcázar", "Acueducto", "Catedral", "Real Casa de Moneda", "Casa de los Picos", "Iglesia de San Martín", "Iglesia de la Santísima Trinidad", "Iglesia de San Esteban", "Iglesia de San Millán", "Iglesia de la Vera Cruz", "Iglesia del Corpus Cristi", "Monasterio del Parral"];
                break;
            case "Sevilla":
                localidad = ["Giralda", "Torre del Oro", "Archivo de Indias", "Casa Pilatos", "Catedral", "Palacio de San Telmo", "Hospital de la Caridad", "Parque de María Luisa", "Reales Alcázares", "Real Maestranza de Caballería", "Plaza España", "Baílica de la Macarena", "Jardines de Murillo"];
                break;
            case "Zamora":
                localidad = ["Catedral", "Puente de Piedra", "Puerta del Obispo", "Puerta de Doña Urraca", "Muralla", "Monasterio de la Carballeda", "Puerta de la Traición", "Molinos de Agua", "Castillo", "Palacio de los Monos"];
                break;
        }
        for (let i = 0; i < localidad.length; i++) {
            console.log(localidad[i]);
            let tabla=document.getElementById("monumentos");
            let li = document.createElement("li");
            let contenidoli=document.createTextNode(localidad[i]);
            console.log(contenidoli);
            li.append(contenidoli);
            console.log(li);
            tabla.append(li);
        }
}
function borrarAnnadirP(){
    let selectPais=document.getElementById("paises");
    let pais=selectPais.getElementsByTagName("option");
    if(pais.length<1){
        annadirP();
    }else{
        borrarP();
    }
}
function borrarP(){
    let paises=document.getElementById("paises").value.trim();
    console.log(paises);
    let region;
    switch (paises) {
        case "España":
            region = ["Asturias", "Galicia", "Cantabria", "País Vasco", "Navarra", "Aragón", "Cataluña", "Castilla y León", "Madrid", "La Rioja", "Extremadura", "Castilla La Mancha", "Valencia", "Murcia", "Andalucía", "Canarias", "Baleares"];
            break;
        case "Alemania":
            region = ["Baden-Wurtemberg", "Baviera", "Berlín", "Brandeburgo", "Bremen", "Hamburgo", "Hesse", "Mecklemburgo-Pomerania Occidental", "Baja Sajonia", "Renania del Norte-Westfalia", "Renania-Palatinado", "Sarre", "Sajonia", "Sajonia-Anhalt", "Schleswig-Holstein", "Turingia"];
            break;
        case "Grecia":
            region = ["Tracia", "Macedonian", "Tesalia", "Epiro", "Grecia Central", "Peloponeso", "Islas del Egeo", "Islas Jónicas", "Creta"];
            break;
        case "Inglaterra":
            region = ["Gran Londres (Greater London)", "Sudeste de Inglaterra (South East England)", "Sudoeste de Inglaterra (South West England)", "Midlands del Oeste (West Midlands)", "Noroeste de Inglaterra (North West England)", "Nordeste de Inglaterra (North East England)", "Yorkshire y Humber (Yorkshire and the Humber)", "Midlands Oriental (East Midlands)", "Inglaterra mega (East of England)"];
            break;
        case "Portugal":
            region = ["Algarve", "Alto Alentejo", "Baixo Alentejo", "Beira Alta", "BeiraBaixa", "Beira Litoral", "Douro Litoral", "Estremadura", "Minho", "Ribatejo", "Trás-os-Montes", "Alto Douro"];
            break;
        case "Italia":
            region = ["Abruzzo", "Basilicata", "Calabria", "Campania", "Cerdeña", "Emilia Romagna", "FriuliVeneziaGiulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piamonte", "Puglia", "Sicilia", "Toscana", "Trentino Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"];
            break;
        case "Francia":
            region = ["Alsacia", "Aquitania", "Auvernia", "Borgoña", "Bretaña", "Valle del Loira", "Champagne-Ardenas", "Córcega", "Franche-Comte", "Paris / Ile de France", "Languedoc - Roussillon", "Limousin", "Lorena", "Midi-Pyrénées", "Nord Pas-de-Calais", "Normandía", "País del Loira", "Picardía", "Poitou-Charentes", "Provenza-Alpes-Costa Azul", "Rhône-Alpes", "Riviera Costa Azul"];
            break;
    }
    let tabla=document.getElementById("regiones");
    console.log(tabla);
    console.log(region);
    let contenido = tabla.getElementsByTagName("td");
    console.log(contenido[0]);
    for (let i = 0; i < contenido.length; i++) {
       for(let j=0;j< region.length;j++){
            if(contenido[i].textContent==region[j]){
                contenido[i].remove();
            }
       }
    }
    let selectPais=document.getElementById("paises");
    let pais=selectPais.getElementsByTagName("option");
    for (let i = 0; i < pais.length; i++) {
        if(pais[i].textContent==paises){
            pais[i].remove();
        }   
    }
    console.log(pais);
    if(pais.length<1){
        borrar.value="Añadir";
        let arrrayP = ["España","Alemania","Grecia","Inglaterra","Portugal","Italia","Francia"];
        for (let i = 0; i < arrrayP.length; i++) {
            let option = document.createElement("option");
            let contenido = document.createTextNode(arrayP[i]);
            option.append(contenido);
            pais.item(pais.length).append(option);
        }
    }
}
function annadirP(){
    let paises=document.getElementById("paises").value.trim();
    console.log(paises);
    let region;
    switch (paises) {
        case "España":
            region = ["Asturias", "Galicia", "Cantabria", "País Vasco", "Navarra", "Aragón", "Cataluña", "Castilla y León", "Madrid", "La Rioja", "Extremadura", "Castilla La Mancha", "Valencia", "Murcia", "Andalucía", "Canarias", "Baleares"];
            break;
        case "Alemania":
            region = ["Baden-Wurtemberg", "Baviera", "Berlín", "Brandeburgo", "Bremen", "Hamburgo", "Hesse", "Mecklemburgo-Pomerania Occidental", "Baja Sajonia", "Renania del Norte-Westfalia", "Renania-Palatinado", "Sarre", "Sajonia", "Sajonia-Anhalt", "Schleswig-Holstein", "Turingia"];
            break;
        case "Grecia":
            region = ["Tracia", "Macedonian", "Tesalia", "Epiro", "Grecia Central", "Peloponeso", "Islas del Egeo", "Islas Jónicas", "Creta"];
            break;
        case "Inglaterra":
            region = ["Gran Londres (Greater London)", "Sudeste de Inglaterra (South East England)", "Sudoeste de Inglaterra (South West England)", "Midlands del Oeste (West Midlands)", "Noroeste de Inglaterra (North West England)", "Nordeste de Inglaterra (North East England)", "Yorkshire y Humber (Yorkshire and the Humber)", "Midlands Oriental (East Midlands)", "Inglaterra mega (East of England)"];
            break;
        case "Portugal":
            region = ["Algarve", "Alto Alentejo", "Baixo Alentejo", "Beira Alta", "BeiraBaixa", "Beira Litoral", "Douro Litoral", "Estremadura", "Minho", "Ribatejo", "Trás-os-Montes", "Alto Douro"];
            break;
        case "Italia":
            region = ["Abruzzo", "Basilicata", "Calabria", "Campania", "Cerdeña", "Emilia Romagna", "FriuliVeneziaGiulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piamonte", "Puglia", "Sicilia", "Toscana", "Trentino Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"];
            break;
        case "Francia":
            region = ["Alsacia", "Aquitania", "Auvernia", "Borgoña", "Bretaña", "Valle del Loira", "Champagne-Ardenas", "Córcega", "Franche-Comte", "Paris / Ile de France", "Languedoc - Roussillon", "Limousin", "Lorena", "Midi-Pyrénées", "Nord Pas-de-Calais", "Normandía", "País del Loira", "Picardía", "Poitou-Charentes", "Provenza-Alpes-Costa Azul", "Rhône-Alpes", "Riviera Costa Azul"];
            break;
    }
    let tabla=document.getElementById("regiones");
    console.log(tabla);
    console.log(region);
    let contenido = tabla.getElementsByTagName("tr");
    console.log(contenido[0]);
    let indice=0;
    let indice2=0;
    while(contenido.length>indice && regiones.length>indice2){
        if(contenido[indice].length<3){
            let td=document.createElement("td");
            let content=document.createTextNode(regiones[indice2]);
            td.append(content);
            contenido.item(contenido[indice].length).append(td);
            indice2++;
        }
        indice++;
    }
    let selectPais=document.getElementById("paises");
    let pais=selectPais.getElementsByTagName("option");
    for (let i = 0; i < pais.length; i++) {
        if(pais[i].textContent==paises){
            pais[i].remove();
        }   
    }
    if(pais.length<1){
        borrar.value="Borrar";
        let arrrayP = ["España","Alemania","Grecia","Inglaterra","Portugal","Italia","Francia"];
        console.log(arrayP);
        for (let i = 0; i < arrrayP.length; i++) {
            let option = document.createElement("option");
            let contenido = document.createTextNode(arrayP[i]);
            option.append(contenido);
            pais.item(pais.length).append(option);
        }
    }
}