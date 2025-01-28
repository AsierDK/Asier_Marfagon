<?php
header("Content-Type: text/xml");
// Array bidimensional con precios
$precios = [
    "Sony" => ["32\"" => 300, "40\"" => 400, "50\"" => 500, "65\"" => 700],
    "Samsung" => ["32\"" => 280, "40\"" => 380, "50\"" => 480, "65\"" => 680],
    "LG" => ["32\"" => 260, "40\"" => 360, "50\"" => 460, "65\"" => 660],
    "Panasonic" => ["32\"" => 250, "40\"" => 350, "50\"" => 450, "65\"" => 650],
];
// Recibir datos del cliente
$postData = file_get_contents("php://input");
$xml = simplexml_load_string($postData);
$marca = (string)$xml->marca;
$dimension = (string)$xml->dimension;
// Obtener el precio
$precio = isset($precios[$marca][$dimension]) ? $precios[$marca][$dimension] : "No disponible";
// Responder con XML
echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<modelo>';
echo '<marca>' . htmlspecialchars($marca) . '</marca>';
echo '<dimension>' . htmlspecialchars($dimension) . '</dimension>';
echo '<precio>' . $precio . '</precio>';
echo '</modelo>';
?>