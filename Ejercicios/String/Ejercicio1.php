<HTML>
<H1> Ejercicio 1 </H1>
<BODY>

<?php
    $ip="192.18.16.204";
    $ipDir = explode(".",$ip);
    printf("<p>IP " . $ip . " en binario: %b.",$ipDir[0]);
    printf("%b." ,  $ipDir[1] );
    printf("%b." ,  $ipDir[2] );
    printf("%b" ,  $ipDir[3] );
    printf("</p>");

    $ip2="10.33.161.2";
    $ipDir2 = explode(".",$ip2);
    printf("<p>IP " . $ip2 . "en binario: %b.",$ipDir2[0]);
    printf("%b." ,  $ipDir2[1] );
    printf("%b." ,  $ipDir2[2] );
    printf("%b" ,  $ipDir2[3] );
    printf("</p>");
?>
</BODY>
</HTML>