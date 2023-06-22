<?php
    //mostrar la base completa
    function obtenerTablas()
{
    $conn = obtenerConexion();

    $sql = "SHOW TABLES";
    $result = $conn->query($sql);

    $tablas = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_row()) {
            $tablas[] = $row[0];
        }
    }

    $conn->close();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Verifica si se ha hecho clic en el botón de leer tablas
        if (isset($_POST["obtener_tablas"])) {
            echo "<div>";
            echo "<input type='text' name='nombre_tabla' placeholder='Buscar tabla'>";
            echo "<button type='submit'>Buscar</button>";
            echo "</div>";
            echo "<div class='tablas'>";
            echo "<h3>Tablas encontradas:</h3>";

            foreach ($tablas as $tabla) {
                echo "<input type='radio' name='option' value='{$tabla}'> {$tabla}<br>";
            }
            
            echo "</ul>";
            echo "</div>";
        }
    }

    return $tablas;
}

function tablaSeleccion()
{
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["option"])) {
            $tablaSeleccionada = $_POST["option"];

            // Llama a la función para obtener los datos de la tabla seleccionada
            $datos = obtenerDatos($tablaSeleccionada);

            echo "<div class='datos'>";
            echo "<h3>Datos de la tabla: $tablaSeleccionada</h3>";

            // Muestra los datos obtenidos
            foreach ($datos as $dato) {
                foreach ($dato as $campo => $valor) {
                    $campo = str_replace('_', ' ', $campo); // Replace
                    $campo = ucwords($campo); // Capitalize
                    echo "{$campo}: {$valor}<br>";
                }
                echo "<br>";
            }
            echo "</div>";
        } else {
            echo "No se ha seleccionado ninguna tabla";
        }
    }
}

// Comprueba si la función GetSQLValueString no existe y la define
if (!function_exists("GetSQLValueString")) {
    //evitar la inyección de SQL
    function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
    {
        $conn = obtenerConexion();
        // Evita inyecciones SQL escapando los caracteres especiales
        $theValue = function_exists("mysqli_real_escape_string") ? mysqli_real_escape_string($conn, $theValue) : mysqli_escape_string($conn, $theValue);


        // Formatea el valor según su tipo de datos
        switch ($theType) {
            case "text":
                $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
                break;    
            case "long":
            case "int":
                $theValue = ($theValue != "") ? intval($theValue) : "NULL";
                break;
            case "double":
                $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
                break;
            case "date":
                $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
                break;
            case "defined":
                $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
                break;
        }
        return $theValue;
    }
}

?>
