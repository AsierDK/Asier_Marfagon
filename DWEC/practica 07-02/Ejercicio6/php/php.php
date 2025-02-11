<?php
	
    if(isset($_POST["parametro"]))
    {
        $marca=(object)array("marca"=>array("Samsung"=>"Samsung","Bosch"=>"Bosch","Hisense"=>"Hisense","LG"=>"LG"));
        echo json_encode($marca);
    }
	else
    {
		$entrada = fopen('php://input','r');
		$datos=fgets($entrada);
        $datosCadena =json_decode($datos,true);
		$marca = $datosCadena["marca"];
		$electrodomestico = $datosCadena["electrodomestico"];
        $array = array(
            "Samsung"=>array("lavavadora"=>"125,75,75","lavavajillas"=>"125,75,75","frigorifico"=>"75,200,75","horno"=>"135,80,80","microondas"=>"70,50,50","placa"=>"125,3,25","campana"=>"150,25,25"),
            "Bosch"=>array("lavavadora"=>"125,75,75","lavavajillas"=>"125,75,75","frigorifico"=>"75,200,75","horno"=>"135,80,80","microondas"=>"70,50,50","placa"=>"125,3,25","campana"=>"150,25,25"),
            "Hisense"=>array("lavavadora"=>"125,75,75","lavavajillas"=>"125,75,75","frigorifico"=>"75,200,75","horno"=>"135,80,80","microondas"=>"70,50,50","placa"=>"125,3,25","campana"=>"150,25,25"),
            "LG"=>array("lavavadora"=>"125,75,75","lavavajillas"=>"125,75,75","frigorifico"=>"75,200,75","horno"=>"135,80,80","microondas"=>"70,50,50","placa"=>"125,3,25","campana"=>"150,25,25")
        );
		$medidas=$array[$marca][$electrodomestico];
		$medidasSeparadas = explode(",",$medidas);
		$ancho = $medidasSeparadas[0];
		$alto = $medidasSeparadas[1];
		$fondo = $medidasSeparadas[2];
		$medidasFinales = (object)array("ancho"=>$ancho,"alto"=>$alto,"fondo"=>$fondo);
		echo json_encode($medidasFinales);
    }
	
?>