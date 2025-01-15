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

require_once '../view/movalquilar.php'
?>
