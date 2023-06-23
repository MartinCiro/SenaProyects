<?php
function crearUsuario($nombre, $email, $user, $pass) {
    $conn = obtenerConexion();
    
    date_default_timezone_set('America/Mexico_City');
    $auditoria = date('Y-m-d H:i:s');
    $sql = "INSERT INTO usuariosx (nombre_completo, correo, usuario, contrasena, auditoria) VALUES ('$nombre', '$email', '$user', '$pass', '$auditoria' )";
    $result = $conn->query($sql);
    
    $conn->close();
    
    return $result;
}

?>
