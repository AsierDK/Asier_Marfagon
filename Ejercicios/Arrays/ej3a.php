<HTML>
<HEAD><TITLE> EJ3A – NUM IMPARES</TITLE></HEAD>
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
    
?>
</BODY>
</HTML>
