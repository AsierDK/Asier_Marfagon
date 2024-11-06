<?php


function inicio(){
    $conn=conexion();
    $datos=trataDatos($conn);
    insert($conn,$datos);
    $conn = null;
}

function trataDatos($conn){
    try {
        $nombre = $_REQUEST['nombre'];
        $sql = "SELECT cod_dpto FROM dpto";
        $conn->query($sql);
        $conn->setFetchMode(PDO::FETCH_ASSOC);
        $ids=$conn->fetchAll();
        $id = '';
        if(gettype($ids)=="array") {
            $numero = intval(substr($ids[count($ids) - 1], 1)) + 1;
            if ($numero < 10)
                $id = substr($ids[count($ids) - 1], 0, 1) . "0" . "0" . strval($numero);
            elseif ($numero < 100)
                $id = substr($ids[count($ids) - 1], 0, 1) . "0" . strval($numero);
            else
                $id = substr($ids[count($ids) - 1], 0, 1) . strval($numero);
        }else{
            $numero = intval(substr($ids, 1)) + 1;
            if ($numero < 10)
                $id = substr($ids, 0, 1) . "0" . "0" . strval($numero);
            elseif ($numero < 100)
                $id = substr($ids, 0, 1) . "0" . strval($numero);
            else
                $id = substr($ids, 0, 1) . strval($numero);
        }
        $cod = [$id, $nombre];
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