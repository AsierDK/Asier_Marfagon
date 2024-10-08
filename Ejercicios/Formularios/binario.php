<?php
$num1 = limpiar($_REQUEST['num1']);
$resultado = decbin($num1);

echo "El binario es: ".$resultado;
function limpiar($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>