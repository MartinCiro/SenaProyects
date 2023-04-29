<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>

<body>
<?php
	$magola = $_REQUEST['num1'];
	$hambre = $_REQUEST['num2'];
	$como = $magola + $hambre;
	$r = $magola - $hambre;
	$multiplicacion = $magola * $hambre;
	$division = $magola / $hambre;
	//$potencia = $magola ** $hambre;
	$potencia = pow($magola, $hambre);
	$sen=sin($magola);
	$cose=cos($hambre);
	
	
	$rest = ("La resta de " . $magola . " y " . $hambre . " es: " . $r."<br>");
	$mult = ( "La multiplicacion de " . $magola . " y " . $hambre . " es: " . $multiplicacion."<br>");
	$divi = ("La division de " . $magola . " y " . $hambre . " es: " . $division."<br>");
	$pote = ( "La potencia de " . $magola . " a " . $hambre . " es: " . $potencia."<br>");
	$se = ( "El seno de " . $magola . " es: " . $sen."<br>");
	$co = ( "El Coseno de " . $hambre . " es: " . $cose."<br>");
	//seno magola
	//coseno hambre
	echo "<input name='sum' type='submit' value='Suma' onclick='$como'/>"
?>
</body>
</html>