<?php
//funcion para crear redireccion
function Redirec($page)
{
    $insertGoTo = "$page";
    if (isset($_SERVER['QUERY_STRING'])) {
        $insertGoTo .= (strpos($insertGoTo, '?')) ? "&" : "?";
        $insertGoTo .= $_SERVER['QUERY_STRING'];
    }

    header(sprintf("Location: %s", $insertGoTo));
}



function pb($a, $b, $message=null, $message2=null, $campo=null)
{
    global $datos;
    $nombresCampos=null;
    echo "<$a>";
    // Obtener los nombres de los campos
    if ($campo!=null){
        global $row_Recordset1;
        $nombresCampos=$row_Recordset1;
    }else{
        $nombresCampos = array_keys(reset($datos));
    }
    
    // Imprimir los nombres de los campos
    foreach ($nombresCampos as $nombreCampo => $value) {
        $value = str_replace('_', ' ', $value); // Replace
        $value = ucwords($value); // Capitalize
        echo "<$b>{$value}</$b>";
    }
    if ($message!=null){
        echo "<$b>$message</$b>";
    }
    if ($message2!=null){
        echo "<$b>$message2</$b>";
    }
    echo "</$a>";
}
?>