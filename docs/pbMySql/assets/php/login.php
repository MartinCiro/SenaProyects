<?php
    include 'conexion_bd.php';
    $nombre_completo=$_POST['nombre_completo'];
    $usuario=$_POST['usuario'];
    $correo=$_POST['correo'];
    $contrasena=$_POST['contrasena'];
    $query="INSERT INTO usuarios(nombre_completo,correo,usuario,contrasena) values('$nombre_completo','$correo','$usuario','$contrasena')";
    $ejecutar=mysqli_query($conexion,$query);
    if($ejecutar){
        echo "
            <script>
                alert('usuario almacenado correctamente');
                window.location='../index.php';
            </script>
        ";
    }else{
        echo "
            <script>
                alert('intentelo de nuevo usuario no almacenado');
                window.location='../index.php';
            </script>
        ";  
    }
?>