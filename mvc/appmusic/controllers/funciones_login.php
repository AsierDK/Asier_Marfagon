<?php
include_once "controllers/funciones_comunes";
include_once "controllers/funciones_sesion";
require_once "models/func_db_login";

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
            $sesion = $resultado[0]["nombre"] . " " . $resultado[0]["apellido"];
            inicioCorrecto($sesion, $password);
            header("Location: controllers/funciones_welcome.php");
        }

    }
    catch(PDOException $e)
    {
        echo "Error: " . $e->getMessage();
    }
}
?>
