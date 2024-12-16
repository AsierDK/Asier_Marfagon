<?php
include "funcion_error.php";
function comprobarlogin($user_c,$password_c){
    crearSesion();
    list($user_b,$password_b)=recogerBBDD();
    if (in_array($user_c,$user_b)) {
        if (!in_array($user_b,$_SESSION["usuarios"])){
            $_SESSION["usuarios"][$user_c] = 0;
        }
        if($_SESSION["usuarios"][$user_b]<3) {
            $i = array_search($user_c,$user_b);
            if ($password_b[$i] == $password_c) {
                crearCoockie($user_c, $password_c);
                $_SESSION["usuarios"][$user_c] = 0;
            } else {
                $_SESSION["usuario"][$user_c] += 1;
            }
        }else{
            trigger_error("Usuario bloqueado", E_USER_ERROR);
        }
    }
}
function crearSesion(){
    if (!isset($_SESSION["usuarios"])) {
        session_start();
        $_SESSION["usuarios"] = array();
    }
}
function crearCoockie($user,$pass)
{
    $cookie_name = "usuario";
    $cookie_name2 = "contrasena";
    setcookie($cookie_name, $user, time() + (86400 * 30), "/");
    setcookie($cookie_name2, $pass, time() + (86400 * 30), "/");
}
function recogerDatos(){
    $user = $_POST['user'];
    $password = ($_POST['password']);
    return [$user,$password];
}
function recogerBBDD(){
    $conn=conexionBBDD();
    $user=array();
    $pass=array();
    try{
        $stmt = $conn->prepare("SELECT CustomerNumber,ContactLastName FROM Customers");
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $resultado=$stmt->fetchAll();
        foreach ($resultado as $row){
            array_push($user,$row['CustomerNumber']);
            array_push($pass,$row['ContactLastName']);
        }
    }
    catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }
    $conn=null;
    return [$user,$pass];
}
function conexionBBDD()
{
    $servername = "localhost";
    $username = "root";
    $password = "rootroot";
    $dbname="pedidos";
    $conn = null;

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname",$username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e)
    {
        echo "Connection failed: " . $e->getMessage();
    }

    return $conn;
}
?>