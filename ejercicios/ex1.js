console.log("Este es ex1.js")

function reloa() {
    window.location.reload(1);
}

function enviarAlerta() {
    //fecha y año actual
    var fecha = new Date();
    const Actual = fecha.getFullYear();
    let nam = document.getElementsByName('texto')[0].value;
    let apellido = document.getElementsByName('texto')[1].value;

    //valor fecha yy-mm-dd
    let fech = document.getElementsByName('texto')[2].value;
    age = Actual - fech

    if (age <= 0) {
        alert("Error, año de nacimiento mayor o igual a la fecha actual")
    } else {
        document.getElementById("student_message").innerHTML = `Hola, mi nombre es ${nam} ${apellido} tengo ${age} años y estoy aprendiendo JavaScript`;
    }
}

function resu() {
    var num1 = parseFloat(101);
    var num2 = parseFloat(7);
    cs = parseFloat((num1 + num2) / 2).toFixed(2);
    document.getElementById('result').innerHTML = cs;
}

function cuat() {
    var n = parseInt(document.getElementsByName('num')[0].value.length);
    if (n > 8 && n < 10) {
        //cu
        document.getElementById('cu').innerHTML = "El numero ingresado es valido";
    } else {
        document.getElementById('cu').innerHTML = "El numero ingresado no es valido";
    }
}

function exp() {
    console.log(32 ** 6)
}

function eva() {
    //typeof error,first-name, 2ndAttempt, full name
    document.getElementById('lis').innerHTML = "<ol type='a' id='lis'><li>var <strong>NAME;</strong> Valido, porque está con mayuscula y cumple con las caracteristicas</li><li>var <strong>$num1;</strong> Invalido, porque empieza con un caracter especial</li><li>var <strong>typeof; </strong> Invalido, porque es una palabra clave del lenguaje</li><li>var <strong>first-name; </strong> Invalido, porque tiene caracteres especiales</li><li>var <strong>attempt_2;</strong> Valido, porque no empieza por numeros o caracteres especiales</li><li>var <strong>2ndAttempt; </strong> Invalido, porque no debe empezar por numeros</li><li>var <strong>full name; </strong> Invalido, porque en la declaracion de una variable no puede haber espacion</li></ol>";
}
function nose(){
    
}
