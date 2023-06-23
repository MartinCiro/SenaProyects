<?php
require_once('assets/php/union.php');

$editFormAction = $_SERVER['PHP_SELF'];
if (isset($_SERVER['QUERY_STRING'])) {
  $editFormAction .= "?" . htmlentities($_SERVER['QUERY_STRING']);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST["MM_update"]) && $_POST["MM_update"] === "form1") {
  $id = $_POST['id'];
  $nombre = $_POST['nombre_completo'];
  $correo = $_POST['correo'];
  $usuario = $_POST['usuario'];
  $contrasena = $_POST['contrasena'];

  if (actualizarUsuario($id, $nombre, $correo, $usuario, $contrasena)) {
    echo "<script>alert('Se ha modificado el registro $id correctamente');</script>";
    echo "<script>location.replace('menuprincipal.php');</script>";
  } else {
    echo "Error al actualizar el registro";
  }
}

$colname_ActualizarR = "-1";
if (isset($_GET['id'])) {
  $colname_ActualizarR = $_GET['id'];
}


$conexion = obtenerConexion();
global $nomTbl;
$query_ActualizarR = "SELECT * FROM $nomTbl WHERE id = '" . mysqli_real_escape_string($conexion, $colname_ActualizarR) . "'";
$ActualizarR = mysqli_query($conexion, $query_ActualizarR) or die(mysqli_error($conexion));

$row_ActualizarR = mysqli_fetch_assoc($ActualizarR);
$totalRows_ActualizarR = mysqli_num_rows($ActualizarR);

mysqli_close($conexion);
?>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>Documento sin título</title>
</head>
<body>
  <script>
    function modificar() {
      location.replace('menuprincipal.php');
    }
  </script>
  <form action="<?php echo $editFormAction; ?>" method="post" name="form1" id="form1">
    <table align="center">
      <tr valign="baseline">
        <td nowrap="nowrap" align="right">Id:</td>
        <td><?php echo $row_ActualizarR['id']; ?></td>
      </tr>
      <tr valign="baseline">
        <td nowrap="nowrap" align="right">Nombre_completo:</td>
        <td><input type="text" name="nombre_completo" value="<?php echo htmlentities($row_ActualizarR['nombre_completo'], ENT_COMPAT, 'utf-8'); ?>" size="32" /></td>
      </tr>
      <tr valign="baseline">
        <td nowrap="nowrap" align="right">Correo:</td>
        <td><input type="text" name="correo" value="<?php echo htmlentities($row_ActualizarR['correo'], ENT_COMPAT, 'utf-8'); ?>" size="32" /></td>
      </tr>
      <tr valign="baseline">
        <td nowrap="nowrap" align="right">Usuario:</td>
        <td><input type="text" name="usuario" value="<?php echo htmlentities($row_ActualizarR['usuario'], ENT_COMPAT, 'utf-8'); ?>" size="32" /></td>
      </tr>
      <tr valign="baseline">
        <td nowrap="nowrap" align="right">Contrasena:</td>
        <td><input type="text" name="contrasena" value="<?php echo htmlentities($row_ActualizarR['contrasena'], ENT_COMPAT, 'utf-8'); ?>" size="32" /></td>
      </tr>
      <tr valign="baseline">
        <td nowrap="nowrap" align="right">&nbsp;</td>
        <td><input type="submit" value="Actualizar registro" /></td>
      </tr>
    </table>
    <input type="hidden" name="MM_update" value="form1" />
    <input type="hidden" name="id" value="<?php echo $row_ActualizarR['id']; ?>" />
  </form>
  <p>&nbsp;</p>
</body>
</html>
