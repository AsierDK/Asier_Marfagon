<?php
require_once '../db/db.php';
function vehiculosAlquilados($id){
    try
    {
        $conn = conexionbbdd();
        $stmt = $conn->prepare("SELECT v.matricula,marca,modelo from rvehiculos v,ralquileres a where disponible = 'N' and idcliente=:idcliente and v.matricula = a.matricula;");
        $stmt->bindParam(':idcliente', $id);
        $stmt -> execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $resultado=$stmt->fetchAll();
    }
    catch(PDOException $e)
    {
        echo "Error: " . $e->getMessage();
    }
    return $resultado;
}
function saberValorDev($matricula,$id)
{
    $conn=conexionbbdd();
    try
    {
        $stmt = $conn->prepare("SELECT preciobase from rvehiculos where matricula = :mat");
        $stmt->bindParam(':mat', $matricula);
        $stmt -> execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $resultado=$stmt->fetchAll();
        $precioBase = ($resultado[0]["preciobase"]);
        $stmt = $conn->prepare("SELECT  TIMESTAMPDIFF(SECOND,fecha_alquiler,now()) as tiempo from ralquileres where matricula = :mat and idcliente = :idcliente order by fecha_alquiler desc");
        $stmt->bindParam(':mat', $matricula);
        $stmt->bindParam(':idcliente', $id);
        $stmt -> execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $resultado=$stmt->fetchAll();
        $tiempoTranscurrido = ($resultado[0]["tiempo"]);
    }
    catch(PDOException $e)
    {
        echo "Error: " . $e->getMessage();
    }
    return $precioBase * ($tiempoTranscurrido/60);
}
function saberSiguienteNumeroPago()
{
    try
    {
        $conn=conexionbbdd();
        $stmt = $conn->prepare("SELECT (max(num_pago) + 1) as numpago from ralquileres");
        $stmt -> execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $resultado=$stmt->fetchAll();
    }
    catch(PDOException $e)
    {
        echo "Error: " . $e->getMessage();
    }
    return $resultado[0]["numpago"];
}

function insertarPago($precioCompra,$aceptado)
{
    $matricula = devolverMatricula();
    $id = devolverId();
    $numPago=saberSiguienteNumeroPago();
    $conn=conexionbbdd();
    try
    {
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->beginTransaction();
        if($aceptado == true)
        {
            $stmt = $conn->prepare("UPDATE ralquileres set fecha_devolucion = now(),preciototal=:precio,fechahorapago=now(),num_pago=:numpago where matricula = :mat and idcliente=:id and num_pago is null");
            $stmt->bindParam(':precio', $precioCompra);
            $stmt->bindParam(':numpago', $numPago);
            $stmt->bindParam(':mat', $matricula);
            $stmt->bindParam(':id', $id);
            $stmt -> execute();
            $stmt = $conn->prepare("UPDATE rvehiculos set disponible = 'S' where matricula = :mat");
            $stmt->bindParam(':mat', $matricula);
            $stmt -> execute();
            $conn -> commit();
        }
        else
        {
            $stmt = $conn->prepare("UPDATE rvehiculos set disponible = 'S' where matricula = :mat");
            $stmt->bindParam(':mat', $matricula);
            $stmt -> execute();
            $stmt = $conn->prepare("UPDATE rclientes set pendiente_pago = (pendiente_pago + :pre) where idcliente = :id");
            $stmt->bindParam(':pre', $precioCompra);
            $stmt->bindParam(':id', $id);
            $stmt -> execute();
            $conn -> commit();
        }
    }
    catch(PDOException $e)
    {
        $conn -> rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?>
