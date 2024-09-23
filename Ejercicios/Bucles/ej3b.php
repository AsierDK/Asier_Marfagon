<HTML>
<HEAD><TITLE> EJ3B – Conversor Decimal a base 16</TITLE></HEAD>
<BODY>
<?php
    $num="1515";
    $base="16";
    $numCopy = $num;
    $numBase = "";
    while ($num > 0) 
    {
        $resto = "";
        $resto = $num % $base;
        if ($resto < 10) {
            $numBase = $resto . $numBase;
        } else {
            switch ($resto) {
                case '10':
                    $numBase = "A" . $numBase;
                    break;
                case '11':
                    $numBase = "B" . $numBase;
                    break;
                case '12':
                    $numBase = "C" . $numBase;
                    break;
                case '13':
                    $numBase = "D" . $numBase;
                    break;
                case '14':
                    $numBase = "E" . $numBase;
                    break;
                case '15':
                    $numBase = "F" . $numBase;
                    break;
            }
        }
        $num = floor($num/$base);
    }
    echo "El numero " . $numCopy . " en base " . $base . " es "  . $numBase;
?>
</BODY>
</HTML>