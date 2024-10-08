<?php
$num = substr($_REQUEST['num'],0,strpos($_REQUEST['num'],'/'));
$baseOrigen = substr($_REQUEST['num'],strpos($_REQUEST['num'],'/')+1,strlen($_REQUEST['num']));
$base = limpiar($_REQUEST['base']);
$resultado = base_convert($num,$baseOrigen,$base);

echo "El numero :".$num." en base ".$baseOrigen." al cambiarlo a base ".$base." es: ".$resultado;

function limpiar($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>