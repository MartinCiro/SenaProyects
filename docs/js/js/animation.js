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

const ataquesEnemigo = [
  "El enemigo se ha defendido con agua",
  "El enemigo se ha defendido con Fuego",
  "El enemigo se ha defendido con electrico"
];

const ataquesPlayer = [
  "El Jugador a decidido atacar con agua",
  "El Jugador a decidido atacar con Fuego",
  "El Jugador a decidido atacar con electrico"
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

function go() {
  //reproducirSonido("acces/sounds/inicio.mp3")
  sleep(0000).then(() => {
    page('screen/player/playerAtaq.html');
    window.onload = function () {
      vidaEne(Math.floor(Math.random() * 3));
    };
  });
}

//funcion para el sonido
function reproducirSonido(ubicacionSonido) {
  var audio = new Audio(ubicacionSonido);
  audio.play();
}

//revisa la vida del enemigo y del jugador
/*function ReV(vd, iD, reemplazo) {
  if (vd <= 0) {
    reem(iD, reemplazo, reemplazo)
    reproducirSonido("acces/sounds/lose.mp3")
  } else if (vd >= 100) {
    vd = 100;
  }
}*/

function actualizarPersonaje(idImagen, rutaImagen, idBarraVida, vida, idMensajePerdida) {
  const imagen = document.getElementById(idImagen);
  const barraVida = document.getElementById(idBarraVida);
  const mensajePerdida = document.getElementById(idMensajePerdida);

  // Actualizar imagen
  imagen.innerHTML = `<img src="${rutaImagen}" alt="Personaje">`;

  // Actualizar barra de vida
  barraVida.style.width = `${vida}%`;

  // Verificar si se ha perdido
  if (vida <= 0) {
    barraVida.style.width = '0%';
    barraVida.classList.add('red');
    imagen.innerHTML = "<img src='acces/iconos/1.svg' alt='Personaje'>";
    mensajePerdida.style.display = 'block';
    reproducirSonido("acces/sounds/lose.mp3")
  } else if (vida >= 100) {
    vd = 100;
  }else{
    barraVida.style.width = vida + " %";
    console.log(salu, iD)
  }
}

function atacar() {
  actualizarPersonaje("pla", "acces/Player/DefensaPlayer/Agua/DefeAguaPlay.gif", "vidaJ", salJuga, "mensajePerdidaa")

}

//Mostrar has perdido
function mostrarMensajeAtaque(elementId, mensaje) {
  const elemento = document.getElementById(elementId);
  if (salEnemi <= 0 || salJuga <= 0) {
    elemento.innerText = mensaje;
    elemento.style.display = "block";
  }
}

//Vida enemigo
function vidaEne(AtaJuga) {
  reproducirSonido('acces/sounds/espada.mp3');

  const EscuEne = Math.floor(Math.random() * 3);
  const mensajDefensaEnemigo = ataquesEnemigo[EscuEne];
  const mensajeAtaquePlayer = ataquesPlayer[AtaJuga];


  if (AtaJuga >= 0 && AtaJuga < ataques.length) {
    reem("pla", ataJugaGifs[AtaJuga], esperandoAtaque[0]); //envio el reemplazo
    mostrarMensajeAtaque("ataqueEne", mensajDefensaEnemigo);
    mostrarMensajeAtaque("ataquePla", mensajeAtaquePlayer);
    ReV(salEnemi, "Ene", "acces/Enemi/deadEnemi/1.svg");
    ReV(salJuga, "pla", "acces/Player/DeadPlayer/1.svg");
  }

  if (EscuEne >= 0 && EscuEne < escuEneGifs.length) {
    reem("Ene", escuEneGifs[EscuEne], esperandoAtaque[1]);
    mostrarMensajeAtaque("ataqueEne", mensajDefensaEnemigo);
    mostrarMensajeAtaque("ataquePla", mensajeAtaquePlayer);
    ReV(salEnemi, "Ene", "acces/Enemi/deadEnemi/1.svg");
    ReV(salJuga, "pla", "acces/Player/DeadPlayer/1.svg");
  }
  salEnemi -= ataques[EscuEne][AtaJuga];
  actualizarPersonaje("pla", "acces/Player/DefensaPlayer/Agua/DefeAguaPlay.gif", "vidaJ", salJuga, "mensajePerdida")
}


//funcion para reemplazar el contenido de los div
function reem(iD, reemplazo, rutActu) {
  const existingGif = document.getElementById(`${iD}`);
  const newGif = document.createElement('img'); // Crea un contenedor img
  newGif.src = `${reemplazo}`; //Ruta del reemplazo
  existingGif.innerHTML = '';//Se envia el reemplazo
  existingGif.appendChild(newGif);
  const duration = 4000; // Tiempo en milisegundos (3000 ms = 3 segundos)

  //volver al contenido original
  setTimeout(() => {
    existingGif.innerHTML = "<img src='" + rutActu + "' alt='Jugador' width='100%' >";
  }, duration);
}

//!!!
//vida salud Jugador
function vdSalJuga(EscuJuga) {
  AtaEne = (Math.floor(Math.random() * 3));
  reproducirSonido('acces/sounds/Escudo.mp3');
  //Agua
  if (EscuJuga == AtaEne) {
    salJuga -= 10;
    actualizarPersonaje("pla", "acces/Player/DefensaPlayer/Agua/DefeAguaPlay.gif", "vidaJ", salJuga, "mensajePerdida")
  } else if (EscuJuga < AtaEne) {
    salJuga -= 20;
  } else {
    salJuga -= 0;
  }

  const reemParams = [
    { player: escuPlaGifs[EscuJuga], enemy: ataEneGifs[AtaEne] },
    { player: escuPlaGifs[EscuJuga], enemy: ataEneGifs[AtaEne] }
  ];

  for (const params of reemParams) {
    reem("pla", params.player, esperandoAtaque[0]);
    reem("Ene", params.enemy, esperandoAtaque[1]);
  }
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
  } else if (variable === 'salEnemi') {
    reem("Ene", esperandoAtaque[1], esperandoAtaque[1]);
    salEnemi = 100;
    barraVida = document.getElementById('vidaE');
    barraVida.style.width = `${salEnemi}%`;
    barraVida.classList.add('green');
    mensajePerdida.style.display = "none";
  }
}

