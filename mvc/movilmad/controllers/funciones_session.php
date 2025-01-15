<?php

    function iniciarSession()
    {
        session_start();
    }

    function inicioCorrecto($sesion,$password)
    {
        if(!(isset($_SESSION["cliente"])))
        {
            $_SESSION["cliente"]["id"] = $password;
            $_SESSION["cliente"]["nombre"] = $sesion;
        }
    }

    function eliminarSession()
    {
        session_destroy();
        session_unset();
        setcookie("PHPSESSID", "" , time() - (86400 * 30), "/",$_SERVER['HTTP_HOST']);
        header("Location: view/movlogin.php");
    }
?>