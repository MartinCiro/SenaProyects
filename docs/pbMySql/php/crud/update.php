<?php
function actualizarUsuario($id, $nombre, $email) {
    $conn = obtenerConexion();
    
    $sql = "UPDATE usuarios SET nombre='$nombre', email='$email' WHERE id=$id";
    $result = $conn->query($sql);
    
    $conn->close();
    
    return $result;
}
?>
