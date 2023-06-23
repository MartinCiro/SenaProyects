<?php
function Redirec($page){ 
$insertGoTo = "$page";
if (isset($_SERVER['QUERY_STRING'])) {
    $insertGoTo .= (strpos($insertGoTo, '?')) ? "&" : "?";
    $insertGoTo .= $_SERVER['QUERY_STRING'];
}

header(sprintf("Location: %s", $insertGoTo));
}
?>