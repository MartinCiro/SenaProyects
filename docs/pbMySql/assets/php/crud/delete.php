<?php
require_once('assets/php/funciones.php');
function eliminarUsuario($id) {
    $conn = obtenerConexion();
    global $nomTbl;
    
    $sql = "DELETE FROM $nomTbl WHERE id=$id";
    $result = $conn->query($sql);
    
    $conn->close();
    
    return $result;
    
}
?>
