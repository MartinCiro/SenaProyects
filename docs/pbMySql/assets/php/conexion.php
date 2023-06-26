<?php
$hostname_conexion = "localhost";
$username_conexion = "root";
$password_conexion = "";
$database_conexion = "repaso";
$nomTbl = "usuariosx";
$conn = null;

function obtenerConexion() {
    global $hostname_conexion, $username_conexion, $password_conexion, $database_conexion;
    $conn = new mysqli($hostname_conexion, $username_conexion, $password_conexion, $database_conexion);
    try {
      if ($conn->connect_error) {
        throw new Exception("Error de conexión: " . $conn->connect_error);
      }
      return $conn;
    } catch (Exception $e) {
      // Manejar la excepción, mostrar un mensaje de error personalizado o redirigir a una página de error
      echo "Ocurrió un error: " . $e->getMessage();
      exit;
    }
  }
?>