<?php

    $nombre = $_POST["nom"];
    $ape = $_POST["ape"];
    $mod = $_POST["mod"];
    $nota = $_POST["nota"];
    $formatterES = new NumberFormatter("es", NumberFormatter::SPELLOUT);
    $notaTexto = $formatterES -> format($nota);
    echo $notaTexto;
?>