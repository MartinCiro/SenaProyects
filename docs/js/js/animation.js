function page(ru) {
  const contentElement = document.getElementById('jue');

  // Realizar la solicitud al servidor
  const xhr = new XMLHttpRequest();
  console.log(ru)
  xhr.open('GET', ru, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // El contenido se ha cargado exitosamente
      const response = xhr.responseText;
      contentElement.innerHTML = response;
    }
  };
  xhr.send();
}

function go(){
  page('../screen/player/playerAtaq.html');
  document.addEventListener('DOMContentLoaded', function() {
    // Código para acceder al elemento "barraVida" y establecer su ancho
    const barraVida = document.getElementById('vida');
    console.log(barraVida);
    barraVida.style.width = salJuga + '%';
  });
}

var salJuga=100;
var salEnemi=100;
var EscuJuga;
var EscuEne;
var AtaJuga;
var AtaEne=(Math.floor(Math.random() * 3));

//Vida enemigo
function vidaEne(AtaJuga) {
    EscuEne = (Math.floor(Math.random() * 3))
    console.log(EscuEne)
    console.log(AtaJuga)
    const ataques = [
      [10, 20, 0],   // Agua para vidaEne
      [0, 10, 20],   // Fuego para vidaEne
      [20, 0, 10]    // Electrico para vidaEne
    ];
    
    saEne -= ataques[EscuEne][AtaJuga];
    //if(AtaJuga=)
    console.log(saEne)
  }

//vida salud Jugador
function vdSalJuga(EscuJuga){
    //Agua
    if (EscuJuga == AtaEne){
        salJuga -= 10;
        //return has sido atacado con agua
    }else if (EscuJuga < AtaEne){
        salJuga -= 20;
    }else {
        salJuga -= 0;
    }
}

