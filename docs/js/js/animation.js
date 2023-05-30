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
  reproducirSonido("acces/sounds/inicio.mp3")
  sleep(3000).then(() => {
    page('screen/player/playerAtaq.html');
  });
}

//funcion para el sonido
function reproducirSonido(ubicacionSonido) {
  var audio = new Audio(ubicacionSonido);
  audio.play();
}

//revisa la vida del enemigo y del jugador
function ReV(vd, iD, reemplazo) {
  if (vd <= 0) {
    reem(iD, reemplazo, reemplazo)
    var mensajePerdida = document.getElementById(`${iD}`);
    mensajePerdida.style.display = "block";
    reproducirSonido("acces/sounds/lose.mp3")
  } else if (vd >= 100) {
    vd = 100;
  }
}

function atacar(iD, salu) {
  // Obtener la barra de vida
  const barraVida = document.getElementById(`${iD}`);
  // Verificar si el nivel de vida es menor o igual a 0
  if (salu <= 0) {
    // Si el nivel de vida es menor o igual a 0, establecer la barra de vida en 0
    barraVida.style.width = '0%';
    barraVida.classList.add('red');
    mensajePerdida.style.display = "block";
  } else {
    // Si el nivel de vida es mayor a 0, actualizar la barra de vida con el nuevo nivel
    barraVida.style.width = `${salu}%`;
  }

}


function mostrarMensajeAtaque(elementId, mensaje) {
  const elemento = document.getElementById(elementId);
  if (elemento) {
    elemento.innerText = mensaje;
    elemento.style.display = "block";
  }
  if(salEnemi<=0 || salJuga<=0){
    elemento.innerText = mensaje;
    elemento.style.display = "none";
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
  }

  if (EscuEne >= 0 && EscuEne < escuEneGifs.length) {
    const gifEnemigo = escuEneGifs[EscuEne];
    reem("Ene", gifEnemigo, esperandoAtaque[1]);
    mostrarMensajeAtaque("ataqueEne", mensajDefensaEnemigo);
    mostrarMensajeAtaque("ataquePla", mensajeAtaquePlayer);
  }
  salEnemi -= ataques[EscuEne][AtaJuga];
  ReV(salEnemi, "Ene", "acces/Enemi/deadEnemi/1.svg");
  ReV(salJuga, "pla", "acces/Player/DeadPlayer/1.svg");
  atacar("vidaE", salEnemi)
}


//funcion para reemplazar el contenido de los div
function reem(iD, reemplazo, rutActu) {
  const existingGif = document.getElementById(`${iD}`);
  const newGif = document.createElement('img'); // Crea un contenedor img
  newGif.src = `${reemplazo}`; //Ruta del reemplazo
  existingGif.innerHTML = '';//Se envia el reemplazo
  existingGif.appendChild(newGif);
  const duration = 3010; // Tiempo en milisegundos (3000 ms = 3 segundos)

  //volver al contenido original
  setTimeout(() => {
    existingGif.innerHTML = "<img src='" + rutActu + "' alt='Jugador' width='100%' >";
  }, duration);
}

//vida salud Jugador
function vdSalJuga(EscuJuga) {
  AtaEne = (Math.floor(Math.random() * 3));
  atacar("vidaJ", salJuga)
  reproducirSonido('acces/sounds/Escudo.mp3');
  //Agua
  if (EscuJuga == AtaEne) {
    salJuga -= 10;
  } else if (EscuJuga < AtaEne) {
    salJuga -= 20;
  } else {
    salJuga -= 0;
  }

  //reemplazar rutas por un arreglo con las rutas, de igual forma mostrar el mensaje con la funcion de mostrar mensaje
  if(EscuJuga==0 && AtaEne==0){
    reem("pla", "acces/Player/DefensaPlayer/Agua/DefeAguaPlay.gif", esperandoAtaque[0]);
    reem("Ene", "acces/Enemi/AtaqueEne/agua/AtaqueEnemiAgua.gif", esperandoAtaque[1]);
  }else if(EscuJuga==0 && AtaEne==1){
    reem("pla", "acces/Player/DefensaPlayer/Agua/DefeAguaPlay.gif", esperandoAtaque[0]);
    reem("Ene", "acces/Enemi/AtaqueEne/Fuego/AtaqueEnemiFuego.gif", esperandoAtaque[1]);
  }else if(EscuJuga==0 && AtaEne==2){
    reem("pla", "acces/Player/DefensaPlayer/Agua/DefeAguaPlay.gif", esperandoAtaque[0]);
    reem("Ene", "acces/Enemi/AtaqueEne/Electrico/AtaqueEnemiElectrico.gif", esperandoAtaque[1]);

  }else if(EscuJuga==1 && AtaEne==0){
    reem("pla", "acces/Player/DefensaPlayer/Fuego/DefeFuegoPlay.gif", esperandoAtaque[0]);
    reem("Ene", "acces/Enemi/AtaqueEne/agua/AtaqueEnemiAgua.gif", esperandoAtaque[1]);
  }else if(EscuJuga==1 && AtaEne==1){
    reem("pla", "acces/Player/DefensaPlayer/Fuego/DefeFuegoPlay.gif", esperandoAtaque[0]);
    reem("Ene", "acces/Enemi/AtaqueEne/Fuego/AtaqueEnemiFuego.gif", esperandoAtaque[1]);
  }else if(EscuJuga==1 && AtaEne==2){
    reem("pla", "acces/Player/DefensaPlayer/Fuego/DefeFuegoPlay.gif", esperandoAtaque[0]);
    reem("Ene", "acces/Enemi/AtaqueEne/Electrico/AtaqueEnemiElectrico.gif", esperandoAtaque[1]);

  }else if(EscuJuga==2 && AtaEne==0){
    reem("pla", "acces/Player/DefensaPlayer/Electrico/DefeElectroPlay.gif", esperandoAtaque[0]);
    reem("Ene", "acces/Enemi/AtaqueEne/agua/AtaqueEnemiAgua.gif", esperandoAtaque[1]);
  }else if(EscuJuga==2 && AtaEne==1){
    reem("pla", "acces/Player/DefensaPlayer/Electrico/DefeElectroPlay.gif", esperandoAtaque[0]);
    reem("Ene", "acces/Enemi/AtaqueEne/Fuego/AtaqueEnemiFuego.gif", esperandoAtaque[1]);
  }else if(EscuJuga==2 && AtaEne==2){
    reem("pla", "acces/Player/DefensaPlayer/Electrico/DefeElectroPlay.gif", esperandoAtaque[0]);
    reem("Ene", "acces/Enemi/AtaqueEne/Electrico/AtaqueEnemiElectrico.gif", esperandoAtaque[1]);
  }
}

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

