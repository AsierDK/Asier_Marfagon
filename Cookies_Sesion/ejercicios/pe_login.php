<HTML>
<?php include_once "funciones_pe_login.php" ?>
<H1>Ejercicio 3 BBDD</H1>
<BODY>
<form action=<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?> method="post">
    <label>Usuario</label><input type="text" name="user">
    <label>Contraseña</label><input type="text" name="password">
    <input type="submit" value="enviar">
    <input type="reset" value="borrar">
</form>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    list($user,$password)=recogerDatos();
    comprobarlogin($user,$password);
}
?>
</BODY>
</HTML>