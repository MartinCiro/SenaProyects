<?php
function eliminarUsuario($id) {
    $conn = obtenerConexion();
    
    $sql = "DELETE FROM usuarios WHERE id=$id";
    $result = $conn->query($sql);
    
    $conn->close();
    
    return $result;
}
?>
