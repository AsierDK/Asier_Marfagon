<?php
require_once 'funciones_comunes.php';
require_once 'funciones_session.php';
iniciarSession();
$nombre=devolvernombre();
$id=devolverID();
require_once '../view/movwelcome.php';
?>