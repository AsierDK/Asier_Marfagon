<html lang="es">
<?php include_once "funciones_registro.php" ?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calculadora</title>
</head>
<body>
<h1>Calculadora</h1>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
    Usuario:<input type="text" name="usuario"><br>
    Contraseña:<input type="number" name="contrasenna"><br>
    <input type="submit" name="inicio" value="Iniciar">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dept = recogerDatos();
    iniciar($dept);

}
?>
</body>
</html>