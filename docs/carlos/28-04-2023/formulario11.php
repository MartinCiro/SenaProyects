<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>

<body>
<form method="post" action="formulario11.php">
	Número 1: <input name="num1" type="text" size="10" />
    <br />
    Número 2: <input name="num2" type="text" size="10" />
    <br />  
	<input name="s" type="submit" value="Suma" />
    <input name="r" type="submit" value="Resta" />
    <input name="m" type="submit" value="Multiplicacion" />
    <input name="d" type="submit" value="Division" />
    <input name="p" type="submit" value="Potencia" />
    <input name="c" type="submit" value="Seno del numero 1" />
    <input name="sn" type="submit" value="Coseno del numero 2" />
</form>
<?php
//la funcion isset valida lleno o vacio
$num1 = $_POST['num1'];
$num2 = $_POST['num2'];
if (isset($_POST['s']))
	{
		$s = $num1 + $num2;
		echo "La suma de " . $num1 . " y " . $num2 . " es: " . $s;	
	} elseif (isset($_POST['r'])){
		$r = $num1-$num2;
		echo "La resta de " . $num1 . " y " . $num2 . " es: " . $r;
		}elseif (isset($_POST['m'])){
		$m = $num1-$num2;
		echo "La multiplicacion de " . $num1 . " y " . $num2 . " es: " . $m;
		}elseif (isset($_POST['d'])){
		$d = $num1-$num2;
		echo "La division de " . $num1 . " y " . $num2 . " es: " . $d;
		}elseif (isset($_POST['p'])){
		$p = pow($num1, $num2);
		echo "La potencia de " . $num1 . " y " . $num2 . " es: " . $p;
		}elseif (isset($_POST['c'])){
		$se = sin($num1);
		echo "El seno de " . $num1 ." es: " . $se;
		}elseif (isset($_POST['sn'])){
		$co = cos($num2);
		echo "El coseno de ".$num2 ." es: " . $co;
		}else{
			echo "Has ingresado valores errados";
			}
?>
</body>
</html>