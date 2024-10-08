<?php
$num1 = limpiar($_REQUEST['num1']);
$resultado = decbin($num1);

print  "Numero Decimal:<input type='number' name='num1' value='$num1'><br>  Numero binario:<input type='number' name='num2' value='$resultado'><br>";
function limpiar($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>