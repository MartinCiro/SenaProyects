<?php
require_once('assets/php/union.php');

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ((isset($_GET['id'])) && ($_GET['id'] != "")) {
  $id = $_GET['id'];

  if (eliminarUsuario($id)) {
    Redirec("menuprincipal.php");
  } else {
    echo "Error al eliminar el usuario.";
  }
}
?>