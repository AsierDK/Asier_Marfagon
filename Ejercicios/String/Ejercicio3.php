<HTML>
<H1> Ejercicio 3 </H1>
<BODY>

<?php

    $ip="192.168.16.100/16";
    $mask=substr($ip,-2);
    echo $mask . "<br>";
    $host=32-intval($mask);
    $trueIp=str_replace("/".$mask,"",$ip);
    $ipDir = explode(".",$trueIp);
    $redDir = substr(decbin($ipDir[3]),$host);
    $lastDirRed = $lastBroadIp = $redDir;
    for ($i=0; $i < $host; $i++) {
        $lastDirRed = $lastDirRed . "0";
    }
    $ipDirRes = $ipDir[0] .".".$ipDir[1].".".$ipDir[2].".". bindec($lastDirRed);
    $ip1 = $ipDir[0] .".".$ipDir[1].".".$ipDir[2].".". (bindec($lastDirRed)+1);
    for ($i=0; $i < $host; $i++) {
        $lastBroadIp= $lastBroadIp . "1";
    }
    $IpBroadcast = $ipDir[0] .".".$ipDir[1].".".$ipDir[2].".". bindec($lastBroadIp);
    $lastIp = $ipDir[0] .".".$ipDir[1].".".$ipDir[2].".". (bindec($lastBroadIp)-1);

    echo "IP: ". $trueIp . "<br>";
    echo "Mascara: ". $mask . "<br>";
    echo "Direccion Red: ". $ipDirRes . "<br>";
    echo "Direccion Broadcast: ". $IpBroadcast . "<br>";
    echo "Rango:  ". $ip1 . " - " . $lastIp . "<br>";

    $ip2="192.168.16.100/21";
    

    $ip3="10.33.15.100/8";


?>
</BODY>
</HTML>