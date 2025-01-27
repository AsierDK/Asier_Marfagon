<?php
require_once 'funciones_session.php';
require_once 'funciones_comunes.php';
require_once '../models/func_db_alquilar.php';
require_once "funciones_redsys.php";

iniciarSession();
if(!verificarSessionExistente()){
    eliminarSessionSinRedireccion();
    header("Location: ../index.php");
}
$nombre=devolvernombre();
$id=devolverID();

require_once '../models/func_db_devolver.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(isset($_POST["devolver"])){
        $vehiculo = recogerDatos();
        if($vehiculo != ""){
            $precioTotal = saberValorDev($vehiculo,$id);
            insertarMatricula($vehiculo);
            list($params,$signature,$version) = redireccionarPago($precioTotal);
        }
        else
            trigger_error("No Tienes Vehiculos Para Devolver");
    }
    if(isset($_POST["volver"])){
        header("Location: controller_welcome.php");
    }
}
function recogerDatos(){
    $vehiculo = $_POST["vehiculos"];
    return $vehiculo;
}
$resultado = vehiculosAlquilados($id);

require_once ("../view/movdevolver.php");
?>
