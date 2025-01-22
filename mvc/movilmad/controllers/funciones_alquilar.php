<?php
require_once 'funciones_session.php';
require_once 'funciones_comunes.php';
require_once '../models/func_db_alquilar.php';
iniciarSession();
if(!verificarSessionExistente())
{
    eliminarSessionSinRedireccion();
    header("Location: ../index.php");
}
$nombre=devolvernombre();
$id=devolverID();
date_default_timezone_set('GMT');
$fecha = (date('d') ."/".date('m')."/".date('Y')."  ".(date('H')+1).":".date('i'));
$resultado=saberVehiculosDisponibles();
$tabla=recuperarCesta();
require_once '../view/movalquilar.php';

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    if(isset($_POST["agregar"]))
    {
        $matricula = recogerDatos();
        if($matricula != "")
        {
            annadirVehiculosALaCesta($matricula);
            header("Refresh: 3");
        }
    }
    if(isset($_POST["alquilar"]))
    {
        $cesta = devolverCesta();
        if($cesta != null)
        {
            realizarAlquiler($cesta,$id);
            vaciarCesta();
            header("Refresh: 0");
        }
        else
        {
            trigger_error("No Puedes Alquilar Vehiculos con la Cesta Vacia");
        }
    }
    if(isset($_POST["vaciar"]))
    {
        vaciarCesta();
        header("Refresh: 0");
    }
}
function recogerDatos()
{
    $matricula = $_POST["vehiculos"];
    return $matricula;
}
?>
