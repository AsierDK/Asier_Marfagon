<?php
function recogerDatos(){
    $usuario = $_POST["usuario"];
    $contrasena = $_POST["contrasena"];
    return [$usuario, $contrasena];
}

function iniciar($login){
    if(isset($_COOKIE["usuario"]) && isset($_COOKIE["contrasena"])){
        iniciarCoockie($login);
    }else{
        coockie($login);
    }
}

function coockie($login){
    $conn=conexionBBDD();
    try {
        $stmt = $conn->prepare("SELECT usu,cont from coockie");
        $stmt->bindParam(':dpto', $dept);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $resultado=$stmt->fetchAll();
        $conexion=false;
        foreach($resultado as $row) {
            if($row["nombre"]==$login[0] && $row["cont"]==$login[1]){
                $conexion=true;
            }
        }
        if($conexion) {
            print "<h3>Sesion iniciada: Bienvenido ".$login[0]."</h3>";
            crearCoockie($login);
        }else{
            print"<h3>No se pudo iniciar sesion</h3>";
        }

    }
    catch(PDOException $e){
        echo "Error: " . $e->getMessage();
    }
    $conn = null;
}

function crearCoockie($login){
    setcookie($login[0], $login[1], time() + (86400 * 30), "/");
}

function conexionBBDD()
{
    $servername = "localhost";
    $username = "root";
    $password = "rootroot";
    $dbname="usuarioscoockie";
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

function limpiar($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>