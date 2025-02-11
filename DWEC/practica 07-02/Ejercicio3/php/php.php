<?php
$archivo = $_POST["nota1"];
switch ($archivo) {
    case 5:
        echo "SUFICIENTE";
        break;
    case 6:
        echo "BIEN";
        break;
    case 7:
    case 8:
        echo "NOTABLE";
        break;
    case 9:
    case 10:
        echo "SOBRESALIENTE";
        break;
    default:
        echo "SUSPENSO";
        break;
}
?>