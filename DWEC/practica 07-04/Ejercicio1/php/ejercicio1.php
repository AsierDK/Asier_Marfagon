<?php
$archivo = $_GET["ciudad"];
$file = file_get_contents("../".$archivo);
$cadenaDiv = "<div id=\"contenido\">";
$posicionInicial = strpos($file,$cadenaDiv);
$posicionFinal = strpos($file,"</div>",$posicionInicial);
$cadena = htmlspecialchars(trim(substr($file,$posicionInicial+strlen($cadenaDiv),$posicionFinal-$posicionInicial-strlen($cadenaDiv))));
echo $cadena ;
?>
