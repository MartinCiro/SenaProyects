function mostrar(nm, ed, ic, text){
    var dv = document.getElementById("ocu"); 
    dv.innerHTML=(`Tu nombre es: ${nm}<br>Edad es: ${ed}<br>IMC: ${ic}<br>Interpretacion es: ${text} <br>`)
    dv.style.display="block";
}

function calc() {
    const nam = document.getElementById("nam").value;
    const edad = document.getElementById("edad").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    var imc = parseFloat(peso / Math.pow(altura, altura));
    if (edad >= 18 && edad <= 59) {
        if (imc < 18.50) {
            mostrar(nam, edad, imc, "Peso bajo");
        } else if (imc >= 18.50 && imc <= 24.99) {
            mostrar(nam, edad, imc, "Peso Normal")
        } else if (imc >= 25.00 && imc <= 29.99) {
            mostrar(nam, edad, imc, "Sobre peso")
        } else {
            mostrar(nam, edad, imc, "Obesidad")
        }
    } else if (edad < 18) {
        mostrar(nam, edad, imc, "Has ingresado un valor menor de edad")
    } else {
        if (imc < 16.0) {
            mostrar(nam, edad, imc, "Desnutricion severa")
        } else if (imc >= 16.0 && imc <= 18.4) {
            mostrar(nam, edad, imc, "Desnutricion")
        } else if (imc >= 18.5 && imc <= 21.9) {
            mostrar(nam, edad, imc, "Peso insuficiente")
        } else if (imc >= 22.0 && imc <= 26.9) {
            mostrar(nam, edad, imc, "Peso normal")
        } else if (imc >= 27.0 && imc <= 29.9) {
            mostrar(nam, edad, imc, "Sobrepeso")
        }else if (imc >= 30.0 && imc <= 34.9) {
            mostrar(nam, edad, imc, "Obesidad")
        }else if (imc >= 35.0) {
            mostrar(nam, edad, imc, "Obesidad por grados")
        }
    }
}