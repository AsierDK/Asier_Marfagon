<?php
require_once 'db/db.php';

function db_login($nom,$password){
    $conn=conexionbbdd();
    $stmt = $conn->prepare("SELECT Email,LastName from customer where Email = :nom and LastName = :password");
    $stmt->bindParam(':nom', $nom);
    $stmt->bindParam(':password', $password);
    $stmt -> execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $resultado=$stmt->fetchAll();
    $conn=null;
    return $resultado;
}
?>
