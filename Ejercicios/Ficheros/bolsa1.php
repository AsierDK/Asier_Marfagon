<HTML>
<H1>Ejercicio 1</H1>
<BODY>
<h1>Datos Alumnos</h1>
<?php

function recogerDatos(){
    $file = fopen('..\\files\\ibex35.txt',"r") or die("No se ha encontrado el fichero");
    imprimirInicio();
    while(!feof($file))
    {
        $datos = fichero(fgets($file));
        if(count($datos) != 0)
            imprimir($datos);
    }
    fclose($file);
    imprimirFin();
}

function limpiar($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function fichero($linea)
{
    $data = array();
    if($linea != ""){
        $data[0] = limpiar(substr($linea,0,23));
        $data[1] = limpiar(substr($linea,23,8));
        $data[2] = limpiar(substr($linea,32,8));
        $data[3] = limpiar(substr($linea,40,8));
        $data[4] = limpiar(substr($linea,48,11));
        $data[5] = limpiar(substr($linea,60,8));
        $data[6] = limpiar(substr($linea,69,8));
        $data[7] = limpiar(substr($linea,78,12));
        $data[8] = limpiar(substr($linea,91,8));
    }
    return $data;
}
function imprimir($datos)
{
    print "<tr><th>" . $datos[0] ."</th><th>" . $datos[1] ."</th><th>" . $datos[2] ."</th><th>" . $datos[3] ."</th><th>" . $datos[4] ."</th><th>" . $datos[5] ."</th><th>" . $datos[6] ."</th><th>" . $datos[7] ."</th><th>" . $datos[8] ."</th></tr>";
}

function imprimirFin()
{
    print"</table>";
}
function imprimirInicio()
{
    print"<table border='1'>";
}

recogerDatos();
?>

</BODY>
</HTML>