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

function actualizarPersonaje(idImagen, idAtaque, idBarraVida, vida, idMensajePerdida, rutaReemplazo, ataques, defensas) {
  const imagen = document.getElementById(idImagen);
  const barraVida = document.getElementById(idBarraVida);
  const mensajePerdida = document.getElementById(idMensajePerdida);
  const ataque = document.getElementById(idAtaque);

  // Obtener el índice del ataque o defensa
  const indiceAtaque = ataques.indexOf(rutaReemplazo);
  const indiceDefensa = defensas.indexOf(rutaReemplazo);

  // Actualizar imagen
  imagen.innerHTML = `<img src="${rutaReemplazo}" alt="Personaje">`;

  // Actualizar barra de vida
  barraVida.style.width = `${vida}%`;

  // Verificar si se ha perdido
  if (vida <= 0) {
    vida = 0;
    barraVida.style.width = '0%';
    barraVida.classList.add('red');
    imagen.innerHTML = `<img src=${rutaReemplazo}`;
    mensajePerdida.style.display = 'block';
    reproducirSonido("acces/sounds/lose.mp3");
  } else if (vida >= 100) {
    vida = 100;
  }

  // Mostrar ataque o defensa
  if (indiceAtaque !== -1) {
    ataque.innerText = ataques[indiceAtaque];
  } else if (indiceDefensa !== -1) {
    ataque.innerText = defensas[indiceDefensa];
  }
  ataque.style.display = 'block';
}


//Vida enemigo
function vidaEne(AtaJuga) {
  
  reproducirSonido('acces/sounds/espada.mp3');
  const EscuEne = Math.floor(Math.random() * 3);
  salEnemi -= ataques[EscuEne][AtaJuga];
  console.log(`La vida del enemigo es: ${salEnemi} y la del jugador es: ${salJuga}`);

  if (AtaJuga >= 0 && AtaJuga < ataquesPlayer.length) {
    actualizarPersonaje("pla", "ataquePla", "vidaJ", salJuga, "mensajePerdidaa", ataquesPlayer[AtaJuga], ataquesPlayer);
  }

  if (EscuEne >= 0 && EscuEne < ataquesEnemigo.length) {
    actualizarPersonaje("Ene", "ataqueEne", "vidaE", salEnemi, "mensajePerdidaa", ataquesEnemigo[EscuEne], ataquesEnemigo);
  }
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

  AtaEne = Math.floor(Math.random() * 3);
  console.log(salJuga)
  reproducirSonido('acces/sounds/Escudo.mp3');

  const reemParams = [
    { player: escuPlaGifs[EscuJuga], enemy: ataEneGifs[AtaEne] },
    { player: escuPlaGifs[EscuJuga], enemy: ataEneGifs[AtaEne] }
  ];

  for (const params of reemParams) {
    reem("pla", params.player, esperandoAtaque[0]);
    reem("Ene", params.enemy, esperandoAtaque[1]);
  }
  
  salJuga -= ataques[EscuJuga][AtaEne]; // Se intercambia EscuJuga y AtaEne
  
  console.log(`La vida del jugador es: ${salJuga} y la vida del enemigo es: ${salEnemi}`);
  actualizarPersonaje("pla", ataJugaGifs[EscuJuga], "vidaJ", salJuga, "mensajePerdida", "acces/Player/DeadPlayer/1.svg","ataquePla");
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

