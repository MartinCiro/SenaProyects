<?php
require_once('assets/php/union.php');

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ((isset($_GET['id'])) && ($_GET['id'] != "")) {
  $id = $_GET['id'];

  if (eliminarUsuario($id)) {
    $deleteGoTo = "menuprincipal.php";
    if (isset($_SERVER['QUERY_STRING'])) {
      $deleteGoTo .= (strpos($deleteGoTo, '?')) ? "&" : "?";
      $deleteGoTo .= $_SERVER['QUERY_STRING'];
    }
    header(sprintf("Location: %s", $deleteGoTo));
  } else {
    echo "Error al eliminar el usuario.";
  }
}
?>