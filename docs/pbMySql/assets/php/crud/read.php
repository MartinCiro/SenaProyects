<?php
require_once('assets/php/funciones.php');
function obtenerDatos() {
    $conn = obtenerConexion();
    global $nomTbl;
    $sql = "SELECT * FROM $nomTbl";
    $result = $conn->query($sql);
    $datos = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $datos[] = $row;
        }
    }
    $conn->close();
    
    return $datos;
}
?>
