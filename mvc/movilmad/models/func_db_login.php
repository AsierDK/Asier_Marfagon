<?php
require_once 'db/db.php';

function db_login($email,$password){
    $conn=conexionbbdd();
    $stmt = $conn->prepare("SELECT nombre,apellido from rclientes where email = :email and idcliente = :password");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':password', $password);
    $stmt -> execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $resultado=$stmt->fetchAll();
    var_dump($resultado);
    $conn=null;
    var_dump($resultado);
    sleep(5);
    return $resultado;
}
function db_bloqueados($password){
    $conn=conexionbbdd();
    $stmt = $conn->prepare("SELECT fecha_baja,pendiente_pago from rclientes where idcliente = :password");
    $stmt->bindParam(':contrasena', $password);
    $stmt -> execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $resultado=$stmt->fetchAll();
    $conn=null;
    return $resultado;
}
?>
