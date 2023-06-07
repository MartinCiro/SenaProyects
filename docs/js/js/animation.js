var salJuga = 100;
var salEnemi = 100;
var EscuJuga;
var EscuEne;
var AtaJuga;
var AtaEne;

const ataques = [
  [10, 20, 0],   // Agua para vidaEne
  [0, 10, 20],   // Fuego para vidaEne
  [20, 0, 10]    // Electrico para vidaEne
];

const defensaEnemigo = [
  "El enemigo se ha defendido con agua",
  "El enemigo se ha defendido con Fuego",
  "El enemigo se ha defendido con electrico"
];

const ataquesPlayer = [
  "El Jugador a decidido atacar con agua",
  "El Jugador a decidido atacar con Fuego",
  "El Jugador a decidido atacar con electrico"
];

const ataquesEnemigo = [
  "El enemigo ha atacado con agua",
  "El enemigo ha atacado con Fuego",
  "El enemigo ha atacado con electrico"
];

const defensaPlayer = [
  "El Jugador se ha defendido con agua",
  "El Jugador se ha defendido con Fuego",
  "El Jugador se ha defendido con electrico"
];

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

//Extraer el contenido de la pagina secundaria
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
function ocuBtn(contenedorId, mode) {
  var contenedor = document.getElementById(contenedorId);
  var botones = contenedor.getElementsByTagName('button');


  for (var i = 0; i < botones.length; i++) {
    if (mode == "enabled") {
      botones[i].disabled = false;
    } else {
      botones[i].disabled = true;
    }
  }
}
function mosBtn() {
  1
  const btnBlock = document.getElementById("btn");
  const btnBlock1 = document.getElementById("btn1");
  btnBlock.style.display = 'block';
  btnBlock1.style.display = 'block';
}

function verificarVidaJugador() {
  // Obtener el elemento de la barra de vida del jugador
  var vidaJugadorBarra = document.getElementById("vidaJ");
  var vidaJugadorBarra1 = document.getElementById("vidaE");

  // Verificar la vida actual del jugador (puedes modificar esta lógica según tus necesidades)
  var vidaActualJugador = salJuga;
  var vidaActualJugador2 = salEnemi;
  vidaJugadorBarra.style.width = vidaActualJugador + "%";
  vidaJugadorBarra1.style.width = vidaActualJugador2 + "%";
  if (vidaActualJugador <= 0) {
    ocuBtn("btn1");
  } else if (vidaActualJugador2 <= 0) {
    ocuBtn("btn");
  }
}
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
    existingGif.innerHTML = "<img src='" + rutActu + "' alt='Jugador' width='100%' >";
    ocuBtn("btn","enabled");
    ocuBtn("btn1","enabled");
    existingGif.style.width = ''; // Elimina el tamaño de ancho personalizado
    existingGif.style.height = '';
  }, duration);

}



function go() {
  //reproducirSonido("acces/sounds/inicio.mp3")
  sleep(0000).then(() => {
    page('screen/player/playerAtaq.html');
    setTimeout(verificarVidaJugador, 0);
  });
}

//funcion para el sonido
function reproducirSonido(ubicacionSonido) {
  var audio = new Audio(ubicacionSonido);
  audio.play();
}

function mostrarMensajeAtaque(elementId, mensaje) {
  const elemento = document.getElementById(elementId);
  if (elemento) {
    elemento.innerText = mensaje;
    elemento.style.display = "block";
  }
  if (salEnemi <= 0 || salJuga <= 0) {
    elemento.innerText = mensaje;
    elemento.style.display = "none";
  }
}
//actualizarPersonaje("vidaJ", "mensajePerdida", salJuga, "pla", dead[0])
function actualizarPersonaje(iD, msjPerdida, vida, divImg, rutaReem) {
  const barraVida = document.getElementById(`${iD}`);
  const mensajePerdida = document.getElementById(`${msjPerdida}`);

  // Actualizar barra de vida
  barraVida.style.width = vida;

  // Verificar si se ha perdido
  if (vida <= 0) {
    vida = 0;
    verificarVidaJugador();
    barraVida.style.width = '0%';
    barraVida.classList.add('red');
    //id, reemplazo, rutaActual
    reem(`${divImg}`, rutaReem, rutaReem);
    mensajePerdida.style.display = 'block';
    reproducirSonido("acces/sounds/lose.mp3");

  } else if (vida >= 100) {
    vida = 100;
  }
}
//Vida enemigo
function vidaEne(AtaJuga) {
  reproducirSonido('acces/sounds/espada.mp3');
  EscuEne = Math.floor(Math.random() * 3);
  const mensajeAtaquePlayer = ataquesPlayer[AtaJuga];

  salEnemi -= ataques[AtaJuga][EscuEne];

  console.log(`La vida del enemigo es: ${salEnemi} y la del jugador es: ${salJuga}`);

  if (AtaJuga >= 0 && AtaJuga < ataquesPlayer.length) {
    reem("pla", ataJugaGifs[AtaJuga], esperandoAtaque[0]);
    reem("Ene", escuEneGifs[EscuEne], esperandoAtaque[1]);
    mostrarMensajeAtaque("ataquePla", mensajeAtaquePlayer);
    mostrarMensajeAtaque("ataqueEne", defensaEnemigo[EscuEne])
    actualizarPersonaje("vidaJ", "mensajePerdida", salJuga, "pla", dead[0])
    actualizarPersonaje("vidaE", "mensajePerdidaa", salEnemi, "Ene", dead[1])
  }
  if (EscuEne >= 0 && EscuEne < ataquesEnemigo.length) {
    reem("pla", ataJugaGifs[AtaJuga], esperandoAtaque[0]);
    reem("Ene", escuEneGifs[EscuEne], esperandoAtaque[1]);
    mostrarMensajeAtaque("ataquePla", mensajeAtaquePlayer);
    mostrarMensajeAtaque("ataqueEne", defensaEnemigo[EscuEne])
    actualizarPersonaje("vidaE", "mensajePerdidaa", salEnemi, "Ene", dead[1])
    actualizarPersonaje("vidaJ", "mensajePerdida", salJuga, "pla", dead[0])
  }
  actualizarPersonaje("vidaJ", "mensajePerdida", salJuga, "pla", dead[0])
  actualizarPersonaje("vidaE", "mensajePerdidaa", salEnemi, "Ene", dead[1])
  verificarVidaJugador();
  cambiarTurno();
}


//funcion para reemplazar el contenido de los div


//!!!
//vida salud Jugador
function vdSalJuga(EscuJuga) {

  AtaEne = Math.floor(Math.random() * 3);
  salJuga -= ataques[AtaEne][EscuJuga];
  console.log(salJuga)
  reproducirSonido('acces/sounds/Escudo.mp3');

  const reemParams = [
    { rPlayer: defensaPlayer[EscuJuga], rEnemi: ataquesEnemigo[AtaEne] },
    { rPlayer: defensaPlayer[EscuJuga], rEnemi: ataquesEnemigo[AtaEne] },
  ];

  for (const params of reemParams) {
    reem("pla", escuPlaGifs[EscuJuga], esperandoAtaque[0]);
    reem("Ene", ataEneGifs[AtaEne], esperandoAtaque[1]);
    mostrarMensajeAtaque("ataquePla", params.rPlayer);
    mostrarMensajeAtaque("ataqueEne", params.rEnemi);
    actualizarPersonaje("vidaE", "mensajePerdidaa", salEnemi, "Ene", dead[1])
    actualizarPersonaje("vidaJ", "mensajePerdida", salJuga, "pla", dead[0])
  }
  // Se intercambia EscuJuga y AtaEne

  actualizarPersonaje("vidaE", "mensajePerdidaa", salEnemi, "Ene", dead[1])
  actualizarPersonaje("vidaJ", "mensajePerdida", salJuga, "pla", dead[0])
  verificarVidaJugador()
  cambiarTurno();
}



//Reinciar vida del jugador
function reset(variable) {
  if (variable === 'salJuga') {
    reem("pla", esperandoAtaque[0], esperandoAtaque[0]);
    salJuga = 100;
    barraVida = document.getElementById('vidaJ');
    barraVida.style.width = `${salJuga}%`;
    barraVida.classList.add('green');
    mensajePerdida.style.display = "none";
    mosBtn();
  } else if (variable === 'salEnemi') {
    reem("Ene", esperandoAtaque[1], esperandoAtaque[1]);
    salEnemi = 100;
    barraVida = document.getElementById('vidaE');
    barraVida.style.width = `${salEnemi}%`;
    barraVida.classList.add('green');
    mensajePerdida.style.display = "none";
    mosBtn();
  }
}


var jugadorActual = 0;

function cambiarTurno() {
  if (jugadorActual === 0) {
    jugadorActual = 1;
    ocuBtn("btn1","disabled");
  } else {
    ocuBtn("btn","disabled");
  }
}