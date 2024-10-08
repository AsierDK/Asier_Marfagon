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
    Numero Decimal:<input type="number" name="num1"><br>
    <input type="submit" value="enviar">
    <input type="reset" value="borrar">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = limpiar($_REQUEST['num1']);
    $resultado = decbin($num1);

    print  "Numero binario:<input type='number' name='num2' value='$resultado'><br>";
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