<?php

$ip = explode('.',$_REQUEST['ip']);
$ipOriginal = $ip;
$correcto = true;
$indice = 0;

while($correcto && $indice < 4)
{
    if($ip[$indice] < 0 || $ip[$indice] > 255)
        $correcto = false;
    $indice += 1;
}

if($correcto)
{
    for ($i=0; $i < count($ip); $i++)
    {
        $ip[$i] = decbin($ip[$i]);
    }
    $ipOr= implode('.',$ipOriginal);
    $ipBin= implode('.',$ip);
    print  "Ip<input type='number' name='num1' value='$ipOriginal'><br>  Ip binario:<input type='number' name='num2' value='$ip'><br>";
}
else
    echo "La IP no es Correcta";
?>