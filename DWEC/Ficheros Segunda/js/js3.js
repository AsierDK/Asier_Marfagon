$(window).on("load",inicio);

function inicio(){
    $("#aplicar").on("click",tablaCoches);
    $(".salamanca").on("mouseover",ponerSaltarinas);
    $(".salamanca").on("mouseout",quitarSaltarinas);
    $("#cambiar").on("click",provincias)
}
function tablaCoches(){
    let tablaCoches = $("#coches");
    let contenidoTabla = tablaCoches.find("tbody");
    let filasTabla = contenidoTabla.find("tr");
    let filaImpar = filasTabla.even();
    let filaPar = filasTabla.odd();

    for (let i = 0; i < filaImpar.length; i++) {
        let contenidoFila = filaImpar.eq(i).find("td");
        contenidoFila.eq(0).attr("style","color:green;background-color:orange");
        contenidoFila.eq(1).attr("style","color:red;background-color:yellow");
        contenidoFila.eq(2).attr("style","color:green;background-color:orange");
    }

    for (let i = 0; i < filaPar.length; i++) {
        let contenidoFila = filaPar.eq(i).find("td");
        contenidoFila.eq(0).attr("style","color:red;background-color:yellow");
        contenidoFila.eq(1).attr("style","color:green;background-color:orange");
        contenidoFila.eq(2).attr("style","color:red;background-color:yellow");
    }
}
function ponerSaltarinas(){
    let salamanca = $(".salamanca");
    salamanca.addClass("saltarina");
}
function quitarSaltarinas(){
    let salamanca = $(".salamanca");
    salamanca.removeClass("saltarina");
}
function provincias(){
    let opcionSelect = $(":selected");
    if(optionSelect.length > 0)
    {
        
        let opcionesSelect = new Array();
        for (let i = 0; i < opcionSelect.length; i++) 
        {
            opcionesSelect[i] = opcionSelect.eq(i).text();
        }
        let provinciasArray = new Array();
        for (let i = 0; i < opcionesSelect.length; i++) 
        {
            provinciasArray[i] = devolverProvincias(opcionesSelect[i]);
        }
        let tablaProvincias = $("#ciudades");
        let contenidoTabla = tablaProvincias.find("tbody");
        let filasTabla = contenidoTabla.find("tr");
        for (let i = 0; i < provinciasArray.length; i++) {
            let provincias = provinciasArray[i];
            let provinciasE = 0;
            let indice = 0;
            while (provinciasE <= provincias.length && indice < filasTabla.length)
            {
                let fila = filasTabla.eq(indice);
                let indice2 = 0;
                let contenidoFila = fila.find("td");
                while(indice2 < contenidoFila.length){
                    let indice3 = 0;
                    while(indice3 < provincias.length){
                        if(contenidoFila.eq(indice2).text() == provincias[indice3]){
                            contenidoFila.eq(indice2).remove();
                            provinciasE += 1;
                        }
                        indice3 += 1;
                    }
                    indice2 += 1;
                }
                indice += 1;
            }
            if(provinciasE == provincias.length){
                annadirProvE(provincias);
            }
        }
    }
}
function annadirProvE(provincias){
    let lista = $("#provinciasEliminadas");
    for (let i = 0; i < provincias.length; i++) {
        lista.append(`<li>${provincias[i]}</li>`);
    }
}
function devolverProvincias(comunidad){
    let array = new Array();
    switch(comunidad) {
        case "Andalucia":
            array = ["Jaén", "Córdoba", "Sevilla", "Huelva", "Cádiz", "Málaga", "Granada", "Almería"];
            break;
        case "Aragón":
            array = ["Zaragoza", "Huesca", "Teruel"];
            break;
        case "Asturias":
            array = ["Asturias"];
            break;
        case "Islas Baleares":
            array = ["Islas Baleares"];
            break;
        case "Islas Canarias":
            array = ["Las Palmas de Gran Canaria", "Santa Cruz de Tenerife"];
            break;
        case "Cantabria":
            array = ["Cantabria"];
            break;
        case "Castilla-León":
            array = ["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"];
            break;
        case "Castilla-La Mancha":
            array = ["Cuenca", "Ciudad Real", "Albacete", "Toledo", "Guadalajara"];
            break;
        case "Cataluña":
            array = ["Gerona", "Lléida", "Barcelona", "Tarragona"];
            break;
        case "Comunidad Valenciana":
            array = ["Castellón", "Alicante", "Valencia"];
            break;
        case "Extremadura":
            array = ["Cáceres", "Badajoz"];
            break;
        case "Galicia":
            array = ["A Coruña", "Lugo", "Ourense", "Pontevedra"];
            break;
        case "Madrid":
            array = ["Madrid"];
            break;
        case "Murcia":
            array = ["Murcia"];
            break;
        case "Navarra":
            array = ["Navarra"];
            break;
        case "País Vasco":
            array = ["Álava", "Guipúzcoa", "Vizcaya"];
            break;
        case "La Rioja":
            array = ["La Rioja"];
            break;
        case "Ceuta":
            array = ["Ceuta"];
            break;
        case "Melilla":
            array = ["Melilla"];
            break;
    }
    return array;
}