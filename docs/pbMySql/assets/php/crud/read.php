<?php
require_once('assets/php/funciones.php');
  
  function obtenerDatos() {
    $conn = obtenerConexion();
    global $nomTbl;
    $sql = "SELECT * FROM $nomTbl";
    $result = $conn->query($sql);
    $datos = array();
    if ($result->num_rows > 0) {
        $fields = $result->fetch_fields();
        while ($row = $result->fetch_assoc()) {
            foreach ($fields as $field) {
                //ascapar datos con $field
                $row[$field->name] = $conn->real_escape_string($row[$field->name]);
            }
            $datos[] = $row;
        }
    }
    $conn->close();

    return $datos;
}

$datos = obtenerDatos();
?>
