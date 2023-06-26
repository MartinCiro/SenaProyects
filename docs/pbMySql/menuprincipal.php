<?php
require_once('assets/php/union.php');
?>

<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>Datos de la tabla</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body class="mPr">
  <table>
    <thead>
      <?php
      pb("tr", "th","&nbsp;","&nbsp;");
      ?>
    </thead>
    <tbody>
      <?php
       foreach ($datos as $row_Recordset1) {
        pb("tr", "td",'<a href="modificarusuario.php?id=' . $row_Recordset1['id'] . '">
        <button type="button">Modificar</button>
      </a>','<a href="eliminarUsuario.php?id=' . $row_Recordset1['id'] . '" onclick="return confirm(\'¿Realmente desea eliminar este registro?\')">
      <button type="button">Eliminar</button>
    </a>',"$");
      }
      ?>
    </tbody>
  </table>

</body>

</html>