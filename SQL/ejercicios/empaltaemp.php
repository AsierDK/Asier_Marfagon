<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Calculadora</title>
    <?php include_once "funciones_empaltaemp.php"?>
</head>
<body>
<h1>Calculadora</h1>
<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
    dni:<input type="text" name="dni"><br>
    nombre:<input type="text" name="nombre"><br>
    salario:<input type="text" name="salario"><br>
    fecha_nac:<input type="text" name="fecha_nac"><br>
    <select name="departamentos">
        <?php imprimirDepartamentos(); ?>
    </select>
    <input type="submit" value="enviar">
    <input type="reset" value="borrar">
</form>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    list($dni,$nombre,$fecha,$salario,$dpto) = recogerDatos();
    insertarEmpleado($dni,$nombre,$fecha,$salario,$dpto);
}
?>
</body>
</html>