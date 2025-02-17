if (document.addEventListener){
	window.addEventListener("load",inicio)
}
else if (document.attachEvent){
	window.attachEvent("onload",inicio);
}

function inicio(){
    let localidad=document.getElementById("localidad");
    if (document.addEventListener){
		localidad.addEventListener("click",localidades)
    }
	else if (document.attachEvent){
        localidad.attachEvent("onclick", localidades);
       
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