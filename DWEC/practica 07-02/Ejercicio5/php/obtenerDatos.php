<?php
header("Content-Type: text/xml");
echo '<?xml version="1.0" encoding="UTF-8"?>';
echo '<datos>';
echo '<marcas>';
echo '<marca>Sony</marca>';
echo '<marca>Samsung</marca>';
echo '<marca>LG</marca>';
echo '<marca>Panasonic</marca>';
echo '</marcas>';
echo '<dimensiones>';
echo '<dimension>32"</dimension>';
echo '<dimension>40"</dimension>';
echo '<dimension>50"</dimension>';
echo '<dimension>65"</dimension>';
echo '</dimensiones>';
echo '</datos>';
?>