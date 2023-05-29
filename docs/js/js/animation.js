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
//SalEnemi, Ene, acces/Enemi/deadEnemi/1.svg
function ReV(vd, iD, reemplazo) {
  if(vd<=0){
    var mensajePerdida = document.getElementById('mensajePerdida');
    reem(`${iD}`, `${reemplazo}`, `${reemplazo}`);
    mensajePerdida.style.display = "block";
  } else if (vd >= 100) {
    vd = 100;
    console.log("Se reincia la vida")
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

//Vida enemigo
function vidaEne(AtaJuga) {
  const ataques = [
    [10, 20, 0],   // Agua para vidaEne
    [0, 10, 20],   // Fuego para vidaEne
    [20, 0, 10]    // Electrico para vidaEne
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
  
  reem("pla", "acces/Player/DefensaPlayer/DefPlayer.gif", "acces/Player/EsperandoAtaquePlayer/esperandoAtaquePlayer.gif");
  
  const EscuEne = Math.floor(Math.random() * 3);
  console.log("El enemigo se defiende con " + EscuEne + " y el jugador ataca con " 
  + AtaJuga);
  
  if (AtaJuga >= 0 && AtaJuga < ataques.length) {
    const ataqueJugador = ataques[AtaJuga];
    const gifJugador = ataJugaGifs[AtaJuga];
    reem("pla", gifJugador, "acces/Player/EsperandoAtaquePlayer/esperandoAtaquePlayer.gif");
    console.log(`El jugador ha atacado con ${AtaJuga}`);
  }
  
  if (EscuEne >= 0 && EscuEne < escuEneGifs.length) {
    const gifEnemigo = escuEneGifs[EscuEne];
    reem("Ene", gifEnemigo, "acces/Enemi/EsperandoAtaqueEnemigo/esperandoAtaqueEnem.gif");
    console.log(`El enemigo se ha defendido con ${EscuEne}`);
  }
  salEnemi -= ataques[EscuEne][AtaJuga];
  ReV(salEnemi,"Ene","acces/Enemi/deadEnemi/1.svg");
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

