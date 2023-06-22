<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- Formulario HTML -->
    <form method="post">
    <button type="submit" name="obtener_tablas">Mostrar Tablas</button>
        <!-- Botón para leer los datos -->
        <button type="submit">Ver datos</button>
        <?php require_once 'php/union.php';
        obtenerTablas();
        tablaSeleccion();
        ?>
        
    </form>


</body>

</html>