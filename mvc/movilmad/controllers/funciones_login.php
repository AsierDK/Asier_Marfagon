<?php
    include_once "controllers/funciones_comunes.php";
    include_once "controllers/funciones_session.php";
    require_once "models/func_db_login.php";

if(verificarSessionExistente())
    header("Location: controllers/controller_welcome.php");
elseif($_SERVER["REQUEST_METHOD"] == "POST")
{
    iniciarSession();
    try
    {
        $email = (limpiar($_POST['email']));
        $password = (limpiar($_POST['password']));
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
                header("Location: controllers/funciones_welcome.php");
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
        if($resultado==null){
            $resultado=false;
        }else{
            if($resultado[0]['pendiente_pago']!=0 && $resultado[0]["fecha_baja"]==null){
                trigger_error("El usuario tiene pendientes pagos");
            }elseif ($resultado[0]['fecha_baja']!=null && $resultado[0]["pendiente_pago"]==0){
                trigger_error("El usuario esta dado de baja");
            }else{
                trigger_error("El usuario tiene pendientes pagos y esta dado de baja");
            }
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
require_once 'view/movlogin.php';
?>