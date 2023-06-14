
//funcion para reemplazar los botones
function reemBtn(reemplazo, mode, fun) {
  const existingGif = document.getElementById("btn1");

  // Eliminar el elemento hijo existente, si lo hay
  if (existingGif.firstChild) {
    existingGif.removeChild(existingGif.firstChild);
  }

  const newGif = document.createElement('img');
  newGif.src = reemplazo;
  newGif.alt = mode;
  newGif.style.cursor = 'pointer';
  newGif.id = "btnAta";

  // Agregar evento de clic utilizando addEventListener()
  newGif.addEventListener('click', function () {
    eval(fun); // Ejecutar la función pasada como argumento
  });
  
  existingGif.appendChild(newGif);
}


var salJuga = 100;
var salEnemi = 100;
var EscuJuga;
var EscuEne = Math.floor(Math.random() * 3);
var AtaJuga;
var AtaEne;
var jugadorActual = 1;

const ataques = [
  [10, 20, 0],   // Agua para vidaEne
  [0, 10, 20],   // Fuego para vidaEne
  [20, 0, 10]    // Electrico para vidaEne
];

//Messages
const defensaEnemigo = [
  " el enemigo se ha defendido con escudo de agua, le has quitado ",
  " el enemigo se ha defendido con escudo de Fuego, le has quitado ",
  " el enemigo se ha defendido con escudo electrico, le has quitado "
];

const ataquesPlayer = [
  "Has atacado con ataque de agua,",
  "Has atacado con ataque de Fuego,",
  "Has atacado con ataque electrico,"
];

const ataquesEnemigo = [
  "El enemigo te ha atacado con ataque de agua",
  "El enemigo te ha atacado con ataque de Fuego",
  "El enemigo te ha atacado con ataque electrico"
];

const defensaPlayer = [
  " te has defendido con escudo de agua te ha quitado ",
  " te has defendido con escudo de Fuego te ha quitado ",
  " te has defendido con escudo electrico te ha quitado "
];

//rutas
const ataJugaGifs = [
  "acces/Player/AtaquePlayer/Agua/AtaquePlayerAgua.gif",
  "acces/Player/AtaquePlayer/Fuego/AtaquePlayerFuego.gif",
  "acces/Player/AtaquePlayer/Electrico/AtaquePlayerElectrico.gif"
];
const escuEneGifs = [
  "acces/Enemi/DefensaEnemigo/Agua/DefeAguaEnemi.gif",
  "acces/Enemi/DefensaEnemigo/Fuego/DefeFuegoEnemi.gif",
  "acces/Enemi/DefensaEnemigo/Electrico/DefeElectroEnemi.gif"
];
const escuPlaGifs = [
  "acces/Player/DefensaPlayer/Agua/DefeAguaPlay.gif",
  "acces/Player/DefensaPlayer/Fuego/DefeFuegoPlay.gif",
  "acces/Player/DefensaPlayer/Electrico/DefeElectroPlay.gif",
];
const ataEneGifs = [
  "acces/Enemi/AtaqueEne/agua/AtaqueEnemiAgua.gif",
  "acces/Enemi/AtaqueEne/Fuego/AtaqueEnemiFuego.gif",
  "acces/Enemi/AtaqueEne/Electrico/AtaqueEnemiElectrico.gif"
];
const esperandoAtaque = [
  "acces/Player/EsperandoAtaquePlayer/esperandoAtaquePlayer.gif",
  "acces/Enemi/EsperandoAtaqueEnemigo/esperandoAtaqueEnem.gif"
]
const dead = [
  "acces/Player/DeadPlayer/1.svg",
  "acces/Enemi/deadEnemi/1.svg"
]



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//funcion para atraer el contenido de la siguiente pagina
function page(ru) {
  const contentElement = document.getElementById('jue');

  // Realizar la solicitud al servidor
  const xhr = new XMLHttpRequest(); //creo una variable xhr desde la libreria xml
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

//funcion para verificar la vida del jugador
function verificarVidaJugador() {
  // Obtener el elemento de la barra de vida del jugador
  var vidaJugadorBarra = document.getElementById("vidaJ");
  var vidaJugadorBarra1 = document.getElementById("vidaE");

  // Verificar la vida actual del jugador (puedes modificar esta lógica según tus necesidades)
  var vidaActualJugador = salJuga;
  var vidaActualJugador2 = salEnemi;
  vidaJugadorBarra.style.width = vidaActualJugador + "%";
  vidaJugadorBarra1.style.width = vidaActualJugador2 + "%";
}

//funcion para mostrar quien ganó y volver a la pagina de inicio
function ocuBtn() {
  const duration = 15000; //cantidad de segundos
  const boton = document.getElementById("btn1");
  boton.style.display = "none";
  setTimeout(() => {
    window.location.reload();
  }, duration)
}

//funcion para reemplazar el contenido de las tarjetas
function reem(iD, reemplazo, rutActu) {
  const existingGif = document.getElementById(`${iD}`);
  const newGif = document.createElement('img'); // Crea un contenedor img
  newGif.src = `${reemplazo}`; //Ruta del reemplazo
  existingGif.innerHTML = '';//Se envia el reemplazo
  existingGif.appendChild(newGif);

  existingGif.style.width = '110%'; // Cambia el tamaño de ancho
  existingGif.style.height = '95%'; // Cambia el tamaño de alto

  const duration = 5000; // Tiempo en milisegundos (3000 ms = 3 segundos)
  //volver al contenido original
  setTimeout(() => {
    existingGif.innerHTML = "<img src='" + rutActu + "' alt='Jugador'>";
    existingGif.style.width = ''; // Elimina el tamaño de ancho personalizado
    existingGif.style.height = '';
  }, duration);

}


//funcion del boton start y ocultar los creditos
function go() {
  reproducirSonido("acces/sounds/inicio.mp3")
  sleep(5000).then(() => {
    var d = document.getElementById("ft");
    d.style.display = "none";
    page('screen/page2.html');
    setTimeout(verificarVidaJugador, 0);
  });
}

//funcion para el sonido
function reproducirSonido(ubicacionSonido) {
  var audio = new Audio(ubicacionSonido);
  audio.play();
}

//funcion para mostrar el mensaje de ataque
function mostrarMensajeAtaque(ata, mensaje, cantidad) {
  const elemento = document.getElementById("ataqu");
  if (elemento) {
    elemento.innerText = ata + mensaje + cantidad + " de vida";
    elemento.style.display = "block";
  }
  if (salEnemi <= 0 || salJuga <= 0) {
    elemento.innerText = mensaje;
    elemento.style.display = "none";
  }
}


//Vida enemigo
function vidaEne(AtaJuga) {
  reproducirSonido('acces/sounds/espada.mp3');
  EscuEne = Math.floor(Math.random() * 3);
  const mensajeAtaquePlayer = ataquesPlayer[AtaJuga];

  salEnemi -= ataques[AtaJuga][EscuEne];

  reem("pla", ataJugaGifs[AtaJuga], esperandoAtaque[0]);
  reem("Ene", escuEneGifs[EscuEne], esperandoAtaque[1]);

  mostrarMensajeAtaque(mensajeAtaquePlayer, defensaEnemigo[EscuEne], ataques[AtaJuga][EscuEne]);

  actualizarPersonaje()
  verificarVidaJugador();
  cambiarTurno();
}

//vida salud Jugador
function vdSalJuga(EscuJuga) {
  reproducirSonido('acces/sounds/Escudo.mp3');
  AtaEne = Math.floor(Math.random() * 3);
  const mensajeAtaqueEnemi = ataquesEnemigo[AtaEne];

  salJuga -= ataques[AtaEne][EscuJuga];

  reem("pla", escuPlaGifs[EscuJuga], esperandoAtaque[0]);
  reem("Ene", ataEneGifs[AtaEne], esperandoAtaque[1]);

  mostrarMensajeAtaque(mensajeAtaqueEnemi, defensaPlayer[EscuJuga], ataques[AtaEne][EscuJuga]);

  actualizarPersonaje()
  verificarVidaJugador()
  cambiarTurno();
}

//funcion para evaluar quien pierde
function actualizarPersonaje() {
  const barraVida = document.getElementById("vidaJ",);
  const barraVida2 = document.getElementById("vidaE");
  const mensajePerdida = document.getElementById("mensajePerdida");

  // Actualizar barra de vida
  barraVida.style.width = salEnemi + "%";
  barraVida.style.width = salJuga + "%";
  // Verificar si se ha perdido
  if (salJuga <= 0) {
    salJuga = 0;
    verificarVidaJugador();
    barraVida.style.width = '0%';
    barraVida.classList.add('red');
    reem("Ene", "acces/Enemi/WinnerEnemi/enemiPlay.gif", "acces/Enemi/WinnerEnemi/enemiPlay.gif");
    reem("pla", dead[0], dead[0]);
    mensajePerdida.innerHTML = "Perdiste";
    mensajePerdida.style.display = 'block';
    reproducirSonido("acces/sounds/lose.mp3");
    ocuBtn("btn1");

  } else if (salEnemi <= 0) {
    verificarVidaJugador();
    barraVida2.style.width = '0%';
    barraVida2.classList.add('red');
    reem("pla", "acces/Player/WinnerPlayer/winnerPlay.gif", "acces/Player/WinnerPlayer/winnerPlay.gif");
    reem("Ene", dead[1], dead[1]);
    mensajePerdida.innerHTML = "Ganaste";
    mensajePerdida.style.display = 'block';
    reproducirSonido("acces/sounds/win.mp3");
    ocuBtn("btn1");

  }
}

//funcion para cambiar el turno
function cambiarTurno() {
  if (jugadorActual === 0) {
    reemBtn("acces/iconos/AtaqueAgua.svg", "Ataque de Agua", `vidaEne(0)`);
    reemBtn("acces/iconos/AtaqueFuego.svg", "Ataque de Fuego", "vidaEne(1)");
    reemBtn("acces/iconos/AtaqueElectrico.svg", "Ataque Electrico", "vidaEne(2)");
    jugadorActual = 1;
  } else if (jugadorActual === 1) {
    reemBtn("acces/iconos/EscudoAcuatico.svg", "Escudo de Agua", "vdSalJuga(0)");
    reemBtn("acces/iconos/EscudoFuego.svg", "Escudo de Fuego", "vdSalJuga(1)");
    reemBtn("acces/iconos/EscudoElectrico.svg", "Escudo Electrico", "vdSalJuga(2)");
    jugadorActual = 0;
  }
}