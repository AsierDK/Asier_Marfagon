<?php
    include_once "funciones_comunes.php";
    include_once "funciones_session.php";

    function recogerDatos()
    {
        $email = (limpiar($_POST['email']));
        $password = (limpiar($_POST['password']));
        return [$email,$password];
    }

    function verificarCliente($email,$password)
    {
        iniciarSession();
            $conn = conexionBBDD();
            try
            {
                $stmt = $conn->prepare("SELECT nombre,apellido from rclientes where email = :email and idcliente = :password");
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':password', intval($password));
                $stmt -> execute();
                $stmt->setFetchMode(PDO::FETCH_ASSOC);
                $resultado=$stmt->fetchAll();
				var_dump($email);var_dump($password);
				var_dump($resultado);
                if(empty($resultado))
                {
                    sleep(5);
					trigger_error("Login Erroneo");
                }
                else
                {
                    if(!usuarioBloqueado($password)) {
                        $sesion = $resultado[0]["nombre"] . " " . $resultado[0]["apellido"];
                        inicioCorrecto($sesion, $password);
                        header("Location: ./movwelcome.php");
                    }
                }

            }
            catch(PDOException $e)
            {
                echo "Error: " . $e->getMessage();
            }
            $conn = null;
    }

function usuarioBloqueado($password){
    $conn = conexionBBDD();
    try
    {
        $stmt = $conn->prepare("SELECT fecha_baja,pendiente_pago from rclientes where idcliente = :password");
        $stmt->bindParam(':contrasena', $password);
        $stmt -> execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $resultado=$stmt->fetchAll();
        var_dump($resultado);
        if($resultado[0]['fecha_baja'] == null && resultado[0]['pendiente_pago']==0){
            $resultado=false;
        }else{
            $resultado=true;
        }
        return $resultado;
    }
    catch(PDOException $e)
    {
        echo "Error: " . $e->getMessage();
    }
    $conn = null;
}
?>