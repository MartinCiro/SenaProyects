<?php
function actualizarUsuario($id, $nombre, $email, $user, $pass) {
    $conn = obtenerConexion();
    
    $sql = "UPDATE usuariosx SET nombre_completo='$nombre', correo='$email', usuario='$user', contrasena='$pass' WHERE id=$id";
    
    $result = $conn->query($sql);
    
    $conn->close();
    
    return $result;
}
?>
