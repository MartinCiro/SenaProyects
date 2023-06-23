<?php
    session_start(); // Inicia o reanuda la sesión actual
    
    if(!isset($_SESSION['usuario'])){ // Verifica si la variable de sesión 'usuario' no está establecida
        echo "
            <script>
                alert('Por favor, debe iniciar sesión'); // Muestra una alerta al usuario
                window.location='../../../index.php'; // Redirige al usuario a la página 'index.php'
            </script>
        ";
        //header('location:index.php'); // Redirige al usuario a la página 'index.php' usando PHP (opcional)
        session_destroy(); // Destruye todos los datos registrados en la sesión actual
        die(); // Finaliza la ejecución del script
    }
    
    session_destroy(); // Destruye todos los datos registrados en la sesión actual (independientemente del bloque if)
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bienvenido has ingresado correctamente</h1>
</body>
</html>