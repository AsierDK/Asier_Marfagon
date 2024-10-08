<HTML>
<HEAD><TITLE> EJ1A – NUM IMPARES</TITLE></HEAD>
<BODY>
<?php
    $array1=array ('Bases Datos', 'Entornos Desarrollo', 'Programación');
    $array2=array ('Sistemas Informáticos','FOL','Mecanizado');
    $array3=array ('Desarrollo Web ES','Desarrollo Web EC','Despliegue','Desarrollo Interfaces', 'Inglés'
);
    $arrayU1=array();
    $arrayU2=array();
    $arrayU3=array();


    $arrayU1=unirSinFunciones($arrayU1,$array1);
    $arrayU1=unirSinFunciones($arrayU1,$array2);
    $arrayU1=unirSinFunciones($arrayU1,$array3);

    $arrayU2=array_merge($array1,$array2,$array3);

    array_push($arrayU3, ...$array1);
    array_push($arrayU3, ...$array2);
    array_push($arrayU3, ...$array3);

    print ("<h2>1:</h2>");
    imprimir($arrayU1);
    print ("<h2>2:</h2>");
    imprimir($arrayU2);
    print ("<h2>3:</h2>");
    imprimir($arrayU3);
    print ("<h2>Inverso:</h2>");
    imprimirInver($arrayU1);

    function unirSinFunciones($res, $data){
        foreach ($data as $value) {
            $indice=count($res);
            $res[$indice] = $value;
        }
        return $res;
    }

    function imprimir($data){
        foreach ($data as $value) {
            print("<p>".$value."</p>");
        }
    }

    function imprimirInver($data){
        $res=array();
        foreach ($data as $value) {
            if ($value != "Mecanizado"){
                $indice=count($res);
                $res[$indice] = $value;
            }
        }
        $imprimir=array_reverse($res);
        foreach ($imprimir as $value) {
            print("<p>".$value."</p>");
        }
    }

?>
</BODY>
</HTML>
