<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calculadora</title>
</head>
<body>
    <h1>Calculadora</h1>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
        Operando1:<input type="text" name="num"><br>
        Base:<input type="number" name="base"><br>
        <input type="submit" value="enviar">
        <input type="reset" value="borrar">
    </form>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $num = substr($_REQUEST['num'],0,strpos($_REQUEST['num'],'/'));
        $baseOrigen = substr($_REQUEST['num'],strpos($_REQUEST['num'],'/')+1,strlen($_REQUEST['num']));
        $base = limpiar($_REQUEST['base']);
        $resultado = base_convert($num,$baseOrigen,$base);

        echo "El numero :".$num." en base ".$baseOrigen." al cambiarlo a base ".$base." es: ".$resultado;
    }
function limpiar($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
</body>
</html>