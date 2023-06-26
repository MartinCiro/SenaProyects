 <?php
    include_once "../conexion.php";

    session_start();
    global $hostname_conexion, $username_conexion, $password_conexion, $database_conexion;
    $conn = new mysqli($hostname_conexion, $username_conexion, $password_conexion, $database_conexion);

    // Verificar si el formulario de inicio de sesión ha sido enviado
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Obtener los valores ingresados por el usuario
        $correo = $_POST['correoo'];
        $contrasena = $_POST['contrasenaa'];

        // Verificar si los valores coinciden con los datos de inicio de sesión correctos
        $validar_login = mysqli_query($conn, "SELECT * FROM $nomTbl WHERE correo='$correo' AND contrasena='$contrasena'");
        if (mysqli_num_rows($validar_login) > 0) {
            $_SESSION['usuario'] = $correo;
            header("location:bienvenido.php");
            exit;
        } else {
            echo "
        <script>
            alert('usuario no existe, por favor verifique los datos ingresados');
            window.location='../../../index.php';

        </script>
        ";
            exit;
        }
    }
    session_destroy();
    ?> 
