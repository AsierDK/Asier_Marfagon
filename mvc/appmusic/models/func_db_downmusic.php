<?php
require_once '../db/db.php';
function saberVehiculosDisponibles()
{
        try
        {
            $conn=conexionbbdd();
            $stmt = $conn->prepare("SELECT TrackId,Name,UnitPrice from track");
            $stmt -> execute();
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $resultado=$stmt->fetchAll();
        }
        catch(PDOException $e)
        {
            echo "Error: " . $e->getMessage();
        }
        $conn=null;
        return $resultado;
}
function annadirCancionesALaCesta($cancion)
{
    if(isset($_SESSION["cliente"]["cesta"]))
    {
        $cesta = $_SESSION["cliente"]["cesta"];
        $cesta[] = $cancion;
        print "<h2>Cancion Añadida A La Cesta</h2>";
    }
    else
    {
        $cesta = null;
        $cesta = array();
        $cesta[] = $cancion;
        print "<h2>Cancion Añadida A La Cesta</h2>";
    }
    $_SESSION["cliente"]["cesta"] = $cesta;
}
function SaberPrecio($cesta)
{
    try
        {
            $conn=conexionbbdd();
            for ($i=0; $i < count($cesta); $i++) { 
                $stmt = $conn->prepare("SELECT UnitPrice from track where TrackId = :id");
                $stmt->bindParam(':id', $cesta[$i]);
                $stmt -> execute();
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
                $datos=$stmt->fetchAll();
            }
            $resultado=0;
            foreach($datos as $precio) {
                $resultado+=$precio;
            }
        }
        catch(PDOException $e)
        {
            echo "Error: " . $e->getMessage();
        }
        $conn=null;
        return $resultado;
}
?>