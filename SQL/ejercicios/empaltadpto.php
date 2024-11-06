<?php
inicio();

function inicio(){
    $datos=['D999','prueba'];
    conexion($datos);
}

function conexion($datos)
{
    $servername = "localhost";
    $username = "root";
    $password = "rootroot";
    $dbname = "empleados1n";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO dpto (cod_dpto, nombre) VALUES ($datos[0], $datos[1])";
        // use exec() because no results are returned
        $conn->exec($sql);
        echo "New record created successfully";
    } catch (PDOException $e) {
        echo $sql . "<br>" . $e->getMessage();
    }

    $conn = null;
}

?>