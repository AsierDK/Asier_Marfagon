<?php
inicio();

function inicio(){
    $conn=conexion();
    $datos=trataDatos($conn);
    insert($conn,$datos);
    $conn = null;
}

function trataDatos($conn){
    $nombre=$_REQUEST['nombre'];
    $sql="SELECT cod_dpto FROM dpto";
    $ids=$conn->query($sql);
    $numero=intval(substr($ids[count($ids)-1],1)) + 1;
    $id='';
    if($numero < 10)
        $id =  substr($ids[count($ids)-1],0,1) . "0" . "0" . strval($numero);
    elseif($numero < 100)
        $id =  substr($ids[count($ids)-1],0,1) . "0". strval($numero);
    else
        $id =  substr($ids[count($ids)-1],0,1) . strval($numero);
    $cod=[$id,$nombre];
    return $cod;
}

function conexion($datos)
{
    $servername = "localhost";
    $username = "root";
    $password = "rootroot";
    $dbname = "empleados1n";
    $conn=null;
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo  "Conexion Fallida<br>" . $e->getMessage();
    }
    return $conn;
}

function insert($conn,$datos)
{
    $sql = "INSERT INTO dpto (cod_dpto, nombre) VALUES ('$datos[0]','$datos[1]')";
    // use exec() because no results are returned
    $conn->exec($sql);
    echo "New record created successfully";
}
?>