<?php
function obtenerDatos($dats) {
    $conn = obtenerConexion();
    
    $sql = "SELECT * FROM $dats";
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
