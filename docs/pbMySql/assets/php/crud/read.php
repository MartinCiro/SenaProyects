<?php
function obtenerDatos() {
    $conn = obtenerConexion();
    
    $sql = "SELECT * FROM usuariosx";
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
