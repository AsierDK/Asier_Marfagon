<?php

    function iniciarSession()
    {
        session_start();
    }
    function verificarSessionExistente()
    {
        $sessionCreada = false;
        if(isset($_SESSION["cliente"]))
            $sessionCreada = true;
        return $sessionCreada;
    }
    function inicioCorrecto($sesion,$password)
    {
        if(!(isset($_SESSION["cliente"])))
        {
            $_SESSION["cliente"]["id"] = $password;
            $_SESSION["cliente"]["nombre"] = $sesion;
        }
    }
    function devolverID(){
        return $_SESSION["cliente"]["id"];
    }
    function devolvernombre(){
        return $_SESSION["cliente"]["nombre"];
    }

    function eliminarSession()
    {
        session_destroy();
        session_unset();
        setcookie("PHPSESSID", "" , time() - (86400 * 30), "/",$_SERVER['HTTP_HOST']);
        header("Location: ../view/movlogin.php");
    }
function annadirVehiculosALaCesta($matricula)
{
    if(isset($_SESSION["cliente"]["cesta"]))
    {
        $cesta = $_SESSION["cliente"]["cesta"];
        $vehiculosAlquilados = intval(saberVehiculosAlquilados($_SESSION["cliente"]["id"]));
        if($vehiculosAlquilados < 3 && count($cesta) < 3 && ($vehiculosAlquilados + count($cesta)) != 3)
        {
            if(in_array($matricula,$cesta))
            {
                trigger_error("No Puedes Alquilar el Mismo Vehiculo mas de Una Vez");
            }
            else
            {
                $cesta[] = $matricula;
                print "<h2>Vehiculo Añadido A La Cesta</h2>";
            }
        }
        elseif(($vehiculosAlquilados + count($cesta)) == 3)
        {
            trigger_error("Entre la Cesta y los Vehiculos Alquilados, Has Alcanzado el Limite");
        }
        elseif(count($cesta) == 3)
        {
            trigger_error("Ya tienes en la cesta 3 vehiculos");
        }
        else
        {
            trigger_error("Ya tienes alquilados 3 vehiculos. Devuelvelos para Alquilar Mas");
        }
    }
    else
    {
        $cesta = null;
        $vehiculosAlquilados = intval(saberVehiculosAlquilados($_SESSION["cliente"]["id"]));
        if($vehiculosAlquilados < 3)
        {
            $cesta = array();
            $cesta[] = $matricula;
            print "<h2>Vehiculo Añadido A La Cesta</h2>";
        }
        else
        {
            trigger_error("Ya tienes alquilados 3 vehiculos. Devuelvelos para Alquilar Mas");
        }
    }
    $_SESSION["cliente"]["cesta"] = $cesta;
}

function vaciarCesta()
{
    unset($_SESSION["cliente"]["cesta"]);
}

function recuperarCesta()
{
    $tablaCesta = null;
    if(isset($_SESSION["cliente"]["cesta"]))
    {
        $cesta = $_SESSION["cliente"]["cesta"];
        $tablaCesta = "<table border='1'><tr><th>Matriculas de los Vehiculos</th></tr>";
        for ($i=0; $i < count($cesta); $i++) {
            $tablaCesta = $tablaCesta . "<tr><td>".$cesta[$i]."</td></tr>";
        }
        $tablaCesta = $tablaCesta . "</table>";
    }
    return $tablaCesta;
}

function devolverCesta()
{
    $cesta = null;
    if(isset($_SESSION["cliente"]["cesta"]))
        $cesta = $_SESSION["cliente"]["cesta"];
    return $cesta;
}
function eliminarSessionSinRedireccion()
{
    session_destroy();
    session_unset();
    setcookie("PHPSESSID", "" , time() - (86400 * 30), "/",$_SERVER['HTTP_HOST']);
}
?>