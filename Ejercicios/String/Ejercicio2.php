<HTML>
<H1> Ejercicio 2 </H1>
<BODY>

<?php
    $ip="192.18.16.204";
    $ipDir = explode(".",$ip);
    echo "<p>IP " . $ip . " en binario: ". decbin($ipDir[0]) .".".decbin($ipDir[1]).".".decbin($ipDir[2]).".".decbin($ipDir[3])." </p>";

    $ip2="10.33.161.2";
    $ipDir2 = explode(".",$ip2);
    echo "<p>IP " . $ip2 . " en binario: ". decbin($ipDir2[0]) .".".decbin($ipDir2[1]).".".decbin($ipDir2[2]).".".decbin($ipDir2[3])." </p>";
?>
</BODY>
</HTML>