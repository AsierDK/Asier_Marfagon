<?php
require_once 'funciones_session.php';
require_once 'funciones_comunes.php';

iniciarSession();
if(!verificarSessionExistente())
{
    eliminarSessionSinRedireccion();
    header("Location: ../index.php");
}
$id = devolverId();
$nombre = devolverNombre();

require_once '../models/func_db_consultar.php';

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    if(isset($_POST["consultar"]))
    {
        list($fechaIni,$fechaFin) = recogerDatos();
        if($fechaIni != null && $fechaFin != null)
            $resultado = vehiculosAlquiladosPeriodoT($fechaIni,$fechaFin,$id);
        else
            trigger_error("Introduce Fechas Correctas");
    }
    if(isset($_POST["volver"]))
    {
        header("Location: funciones_welcome.php");
    }
}

function recogerDatos()
{
    $fechaInicio = $_POST["fechadesde"];
    $fechaFin = $_POST["fechahasta"];
    return [$fechaInicio,$fechaFin];
}

require_once ("../view/movconsultar.php");
?>