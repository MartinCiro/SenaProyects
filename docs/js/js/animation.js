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

function go() {
  page('screen/player/playerAtaq.html');
}

var salJuga = 100;
var salEnemi = 100;
var EscuJuga;
var EscuEne;
var AtaJuga;
var AtaEne;

//funcion para reinciar la vida
function ReV(vd) {
  if (vd <= 0) {
    console.log("El jugador a perdido")
  } else if (vd >= 100) {
    vd = 100;
    console.log("Se reincia la vida del enemigo")
  }
}

//vida del jugador despues de atacar
// Inicializar la variable vida con un valor inicial
let vida = 100;

function atacar() {
  // Obtener la barra de vida
  const barraVida = document.getElementById('vidaE');
  
  // Reducir el nivel de vida en un valor fijo (por ejemplo, 10)
  salEnemi;
  
  // Verificar si el nivel de vida es menor o igual a 0
  if (salEnemi <= 0) {
    // Si el nivel de vida es menor o igual a 0, establecer la barra de vida en 0
    barraVida.style.width = '0%';
    barraVida.classList.add('red');
    barraVida.innerHTML = 'Has perdido el juego';
  } else {
    // Si el nivel de vida es mayor a 0, actualizar la barra de vida con el nuevo nivel
    barraVida.style.width = `${salEnemi}%`;
  }
}
//

//


//Vida enemigo
function vidaEne(AtaJuga) {
  reem();
  EscuEne = (Math.floor(Math.random() * 3))
  console.log(EscuEne)
  console.log(AtaJuga)
  const ataques = [
    [10, 20, 0],   // Agua para vidaEne
    [0, 10, 20],   // Fuego para vidaEne
    [20, 0, 10]    // Electrico para vidaEne
  ];

  salEnemi -= ataques[EscuEne][AtaJuga];
  ReV(salEnemi);
  atacar()
}

//funcion para reemplazar el contenido de los div
function reem() {
  const existingGif = document.getElementById('pla');
  const newGif = document.createElement('img'); // Crea un contenedor img
  newGif.src = 'acces/Player/DefensaPlayer/DefPlayer.gif'; //Ruta del reemplazo
  existingGif.innerHTML = '';//Se envia el reemplazo
  existingGif.appendChild(newGif);
  const duration = 3010; // Tiempo en milisegundos (3000 ms = 3 segundos)

  //volver al contenido original
  setTimeout(() => {
    existingGif.innerHTML = '<img src="acces/Player/EsperandoAtaquePlayer/esperandoAtaquePlayer.gif" alt="Jugador" width="100%" >';/// Ruta para el contenido original
  }, duration);
}

//vida salud Jugador
function vdSalJuga(EscuJuga) {
  ReV(salJuga);
  AtaEne = (Math.floor(Math.random() * 3));
  //Agua
  if (EscuJuga == AtaEne) {
    salJuga -= 10;
    //return has sido atacado con agua
  } else if (EscuJuga < AtaEne) {
    salJuga -= 20;
  } else {
    salJuga -= 0;
  }
}

function reset(variable) {
  if (variable === 'salJuga') {
    salJuga = 100;
    barraVida = document.getElementById('vidaJ');
    barraVida.style.width = `${salJuga}%`;
  } else if (variable === 'salEnemi') {
    salEnemi = 100;
    barraVida = document.getElementById('vidaE');
    barraVida.style.width = `${salEnemi}%`;
  }
}

