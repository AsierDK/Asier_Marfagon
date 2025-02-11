<?php

    if(isset($_POST["parametro"]))
    {
        $cadenaXML= "<televisiones><television><marca>Samsung</marca><dimension>21 Pulgadas</dimension></television><television><marca>Sony</marca><dimension>30 Pulgadas</dimension></television><television><marca>Philips</marca><dimension>18 Pulgadas</dimension></television><television><marca>Hisense</marca><dimension>25 Pulgadas</dimension></television></televisiones>";
        header("Content-type:text/xml");
        echo $cadenaXML;
    }
    if(isset($_POST["cadenaXML"]))
    {
		$cadena = $_POST["cadenaXML"];
		$xml = new DOMDocument();
		$xml->loadXML ($cadena);		
		$xml->xinclude();
		$xml = simplexml_import_dom($xml);
        $marca=strval($xml->television->marca[0]);
        $dimension = strval($xml->television->dimension[0]);
        $array = array(
            "Samsung"=>array("21 Pulgadas"=>500,"30 Pulgadas"=>650,"18 Pulgadas"=>400,"25 Pulgadas"=>450),
            "Sony"=>array("21 Pulgadas"=>500,"30 Pulgadas"=>650,"18 Pulgadas"=>400,"25 Pulgadas"=>450),
            "Philips"=>array("21 Pulgadas"=>500,"30 Pulgadas"=>650,"18 Pulgadas"=>400,"25 Pulgadas"=>450),
            "Hisense"=>array("21 Pulgadas"=>500,"30 Pulgadas"=>650,"18 Pulgadas"=>400,"25 Pulgadas"=>450)
        );
		$precio = $array[$marca][$dimension];
		$cadenaXML="<televisiones><television><marca>".$marca."</marca><dimension>".$dimension."</dimension><precio>".$precio."</precio></television></televisiones>";
		header("Content-type:text/xml");
		echo $cadenaXML;
    }
?>