<?php
function crearUsuario($nombre, $email) {
    $conn = obtenerConexion();

    $sql = "INSERT INTO usuarios (nombre, email) VALUES ('$nombre', '$email')";
    $result = $conn->query($sql);
    
    $conn->close();
    
    return $result;
}
?>
