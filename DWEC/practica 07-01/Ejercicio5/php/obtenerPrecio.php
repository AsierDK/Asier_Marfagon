<?php
header("Content-Type: text/xml");
echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<datos>';

// Array bidimensional con los precios según marca y dimensión
$precios = [
    "Sony" => [
        "32\"" => 250,
        "40\"" => 300,
        "50\"" => 400,
        "65\"" => 600
    ],
    "Samsung" => [
        "32\"" => 200,
        "40\"" => 250,
        "50\"" => 350,
        "65\"" => 500
    ],
    "LG" => [
        "32\"" => 180,
        "40\"" => 230,
        "50\"" => 320,
        "65\"" => 450
    ],
    "Panasonic" => [
        "32\"" => 220,
        "40\"" => 270,
        "50\"" => 370,
        "65\"" => 520
    ]
];

// Recibimos los parámetros enviados por la solicitud AJAX
$marca = isset($_POST['modelo']['marca']) ? $_POST['modelo']['marca'] : '';
$dimension = isset($_POST['modelo']['dimension']) ? $_POST['modelo']['dimension'] : '';

// Si tenemos los valores de marca y dimensión, buscamos el precio
if (!empty($marca) && !empty($dimension)) {
    $precio = 0;
    if (isset($precios[$marca][$dimension])) {
        $precio = $precios[$marca][$dimension];
    }

    // Generar el XML con el precio correspondiente
    echo '<precio>' . $precio . '</precio>';
}

echo '</datos>';
?>