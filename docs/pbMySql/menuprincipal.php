<?php
require_once('assets/php/union.php');

$maxRows_Recordset1 = 15; //numero de registros
$pageNum_Recordset1 = 0;

if (isset($_GET['pageNum_Recordset1'])) {
  $pageNum_Recordset1 = $_GET['pageNum_Recordset1'];
}
$startRow_Recordset1 = $pageNum_Recordset1 * $maxRows_Recordset1;

$datos = obtenerDatos();
$totalRows_Recordset1 = count($datos);
$totalPages_Recordset1 = ceil($totalRows_Recordset1 / $maxRows_Recordset1) - 1;

?>

<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Documento sin título</title>
</head>

<body>
  <table border="1">
    <tr>
      <td>id</td>
      <td>nombre_completo</td>
      <td>correo</td>
      <td>usuario</td>
      <td>contrasena</td>
      <td>auditoria</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <?php foreach ($datos as $row_Recordset1) { ?>
      <tr>
        <td><?php echo $row_Recordset1['id']; ?></td>
        <td><?php echo $row_Recordset1['nombre_completo']; ?></td>
        <td><?php echo $row_Recordset1['correo']; ?></td>
        <td><?php echo $row_Recordset1['usuario']; ?></td>
        <td><?php echo $row_Recordset1['contrasena']; ?></td>
        <td><?php echo $row_Recordset1['auditoria']; ?></td>
        <td><a href="modificarusuario.php?id=<?php echo $row_Recordset1['id']; ?>">Modificar</a></td>
        <td><a href="eliminarUsuario.php?id=<?php echo $row_Recordset1['id']; ?>" onclick="return confirm('Realmente desea eliminar este registro?')">Eliminar</a></td>
      </tr>
    <?php } ?>
  </table>

</body>

</html>
