<?php
require_once '../db/db.php';
function saberVehiculosDisponibles()
{
        try
        {
            $conn=conexionbbdd();
            $stmt = $conn->prepare("SELECT matricula,marca,modelo from rvehiculos where disponible = 'S'");
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
function saberVehiculosAlquilados($id)
{
    try
    {
        $conn=conexionbbdd();
        $stmt = $conn->prepare("SELECT count(*) as alquilados from ralquileres where idcliente = :idcliente and fecha_devolucion is null and preciototal is null and fechahorapago is null");
        $stmt->bindParam(':idcliente', $id);
        $stmt -> execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $resultado=$stmt->fetchAll();
    }
    catch(PDOException $e)
    {
        echo "Error: " . $e->getMessage();
    }
    return $resultado[0]["alquilados"];
}

function realizarAlquiler($cesta,$id)
{
    try
    {
        $conn=conexionbbdd();
        for ($i=0; $i < count($cesta); $i++)
        {
            $stmt = $conn->prepare("INSERT INTO ralquileres (idcliente,matricula,fecha_alquiler,fecha_devolucion,preciototal,fechahorapago) values (:idCliente,:matricula,now(),null,null,null)");
            $stmt->bindParam(':idCliente', $id);
            $stmt->bindParam(':matricula', $cesta[$i]);
            $stmt -> execute();
            $stmt = $GLOBALS["conn"]->prepare("UPDATE rvehiculos set disponible = 'N' where matricula = :matricula ");
            $stmt->bindParam(':matricula', $cesta[$i]);
            $stmt -> execute();
        }
        $conn -> commit();
    }
    catch(PDOException $e)
    {
        $conn -> rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?>
