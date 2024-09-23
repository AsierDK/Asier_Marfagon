<HTML>
<HEAD><TITLE> EJ4A – ARRAY INVERSO</TITLE></HEAD>
<BODY>
<?php
    $bin = array();
    $octal = "";
    print("<table border='1'");
    print("<tr><th>Indice</th><th>Binario</th><th>Octal</th></tr>");
    for ($i=0; $i < 20; $i++) { 
        print("<tr>");
        print("<th>".$i."</th>");
        $bin[$i] = decbin($i);
        $octal = decoct($i);
        print("<th>".$bin[$i]."</th>");
        print("<th>".$octal."</th>");
        print("</tr>");
        $octal = "";
    }
    print ("</table>");
    $array = array_reverse($bin);
    echo "<h2>Array inverso</h2>";
    for ($i=0; $i < count($array); $i++) {
        print("<p>". $array[$i] ."</p><br>");
    }
?>
</BODY>
</HTML>
