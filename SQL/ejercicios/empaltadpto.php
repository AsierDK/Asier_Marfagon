<?php


function inicio(){
    $conn=conexion();
    $datos=trataDatos($conn);
    insert($conn,$datos);
    $conn = null;
}

function trataDatos($conn){
    try {
        $stmt = $conn->prepare("SELECT cod_dpto FROM dpto");
        $codBBDD = null;
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $resultado=$stmt->fetchAll();
        foreach($resultado as $row) {
            $codBBDD = $row["cod_dpto"];
        }
        $num = intval(substr($codBBDD,1)) + 1;
        if($num < 10)
            $cod =  substr($codBBDD,0,1) . "0" . "0" . strval($num);
        elseif($num < 100)
            $cod =  substr($codBBDD,0,1) . "0". strval($num);
        else
            $cod =  substr($codBBDD,0,1) . strval($num);
        return $cod;
    }
    catch(PDOException $e){
        echo  $sql."<br>" . $e->getMessage();
    }
    return $cod;
}

function conexion()
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
    try{
        $sql = "INSERT INTO dpto (cod_dpto, nombre) VALUES ('$datos[0]','$datos[1]')";
        // use exec() because no results are returned
        $conn->exec($sql);
        echo "New record created successfully";
    }
    catch(PDOException $e){
        echo  $sql."<br>" . $e->getMessage();
    }
}

inicio();
?>