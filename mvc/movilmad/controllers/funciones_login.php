<?php
    include_once "funciones_comunes.php";
    include_once "funciones_session.php";
    require_once "models/func_db_login.php";

    function recogerDatos()
    {
        $email = (limpiar($_POST['email']));
        $password = (limpiar($_POST['password']));
        return [$email,$password];
    }

    function verificarCliente($email,$password)
    {
        iniciarSession();
            try
            {
                $resultado=db_login($email,$password);
                if(empty($resultado))
                {
					trigger_error("Login Erroneo");
                }
                else
                {
                    if(!usuarioBloqueado($password)) {
                        $sesion = $resultado[0]["nombre"] . " " . $resultado[0]["apellido"];
                        inicioCorrecto($sesion, $password);
                        header("Location: view/movwelcome.php");
                    }
                }

            }
            catch(PDOException $e)
            {
                echo "Error: " . $e->getMessage();
            }
    }

function usuarioBloqueado($password){
    try
    {
        $resultado=db_bloqueados($password);
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