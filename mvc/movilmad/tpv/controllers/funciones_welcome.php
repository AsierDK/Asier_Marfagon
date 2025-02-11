<?php
require_once 'funciones_comunes.php';
require_once 'funciones_session.php';
iniciarSession();
if(!verificarSessionExistente())
{
    eliminarSessionSinRedireccion();
    header("Location: ../index.php");
}

var_dump($_SESSION);

$nombre=devolvernombre();
$id=devolverID();
require_once '../view/movwelcome.php';
?>