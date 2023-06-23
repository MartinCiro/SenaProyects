<?php
require_once('assets/php/funciones.php');
function actualizarUsuario($id, $nombre, $email, $user, $pass) {
    $conn = obtenerConexion();
    global $nomTbl;
    $sql = "UPDATE $nomTbl SET nombre_completo='$nombre', correo='$email', usuario='$user', contrasena='$pass' WHERE id=$id";
    
    $result = $conn->query($sql);
    
    $conn->close();
    
    return $result;
}
?>
