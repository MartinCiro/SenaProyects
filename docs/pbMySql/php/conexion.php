<?php
$hostname_conexion = "localhost";
$username_conexion = "root";
$password_conexion = "";
$database_conexion = "proyecto10";

function obtenerConexion() {
    global $hostname_conexion, $username_conexion, $password_conexion, $database_conexion;
    
    try {
      $conn = new mysqli($hostname_conexion, $username_conexion, $password_conexion, $database_conexion);
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

if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") {
    $connection = obtenerConexion();
    $theValue = $connection->real_escape_string($theValue);
    $connection->close();
  
    switch ($theType) {
      case "text":
        $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
        break;
      case "long":
      case "int":
        $theValue = ($theValue != "") ? intval($theValue) : "NULL";
        break;
      case "double":
        $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
        break;
      case "date":
        $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
        break;
      case "defined":
        $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
        break;
      default:
        $theValue = "NULL";
        break;
    }
    return $theValue;
  }
} 
