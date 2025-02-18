<html>
   
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Bienvenido a MovilMAD</title>
    <link rel="stylesheet" href="../view/css/bootstrap.min.css">
 </head>
   
 <body>
    <h1>Servicio de ALQUILER DE E-CARS</h1> 

    <div class="container ">
        <!--Aplicacion-->
		<div class="card border-success mb-3" style="max-width: 30rem;">
		<div class="card-header">Menú Usuario - ALQUILAR VEHÍCULOS</div>
		<div class="card-body">
	  	  

	<!-- INICIO DEL FORMULARIO -->
	<form action="" method="post">
		
			<B>Matricula/Marca/Modelo: </B><select name="vehiculos" class="form-control">
            <?php
            if($resultado == null)
                print "<option value=''>Ninguna cancion disponible</option>";
            else
            {
                foreach ($resultado as $coche) {
                    print "<option value='".$coche["TrackId"]."'>".$coche["Name"]." | ".$coche["UnitPrice"]."</option>";
                }
            }
            ?>
			</select>
			<?php print $tabla?>
		
		<BR> <BR><BR><BR><BR><BR>
		<div>
			<input type="submit" value="Agregar a Cesta" name="agregar" class="btn btn-warning disabled">
			<input type="submit" value="Finalizar compra" name="compra" class="btn btn-warning disabled">
			<input type="submit" value="Vaciar Cesta" name="vaciar" class="btn btn-warning disabled">
            <input type="submit" value="Volver" name="volver" class="btn btn-warning disabled">
		</div>		
	</form>
	<!-- FIN DEL FORMULARIO -->
            <BR><a href="controller_cerrarS.php">Cerrar Sesión</a>
  </body>
   
</html>

