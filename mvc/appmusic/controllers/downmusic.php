<?php
require_once 'funciones_session.php';
require_once 'funciones_comunes.php';
require_once '../models/func_db_downmusic.php';
iniciarSession();
if(!verificarSessionExistente())
{
    eliminarSessionSinRedireccion();
    header("Location: ../index.php");
}

var_dump($_SESSION);
$resultado=saberVehiculosDisponibles();
$tabla=recuperarCesta();
require_once '../view/movdownmusic.php';

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    if(isset($_POST["agregar"]))
    {
        $cancion = recogerDatos();
        if($cancion != "")
        {
            annadirCancionesALaCesta($cancion);
            header("Refresh: 0");
        }
    }
    if(isset($_POST["compra"]))
    {
        $cesta = devolverCesta();
        if($cesta != null)
        {
            $precioTotal=SaberPrecio($cesta);
            redireccionarPago($precioTotal)
            realizarAlquiler($cesta,$id);
            vaciarCesta();
            header("Refresh: 0");
        }
        else
        {
            trigger_error("No Puedes comprar con la Cesta Vacia");
        }
    }
    if(isset($_POST["vaciar"]))
    {
        vaciarCesta();
        header("Refresh: 0");
    }
    if (isset($_POST["volver"])){
        header("Location: funciones_welcome.php");
    }
}
function recogerDatos()
{
    $cancion = $_POST["vehiculos"];
    return $cancion;
}
?>
