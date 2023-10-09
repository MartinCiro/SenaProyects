let configTeclado = { prevent_repeat: true };
let eventoTeclado = new window.keypress.Listener(this, configTeclado);


const ataquesMatriz = [
  [0, 1, 2],
  [2, 0, 1],
  [1, 2, 0],
  ["piedra", "papel", "tijera"],
  ["a", "s", "d"],
  ["¡GANASTE!", "¡PERDISTE!", "EMPATE"],
  ["win", "per", "emp"],
];
const obj = {
  a: "piedra",
  s: "papel",
  d: "tijera",
};

const acBarra = (letra_bar, msg) => {
  const progressBar = document.querySelector(`.progress-bar-${letra_bar}`);
  const notification = document.querySelector(`.notification-${letra_bar}`);

  let porcentaje = 100;
  const text = document.createElement("p");
  text.innerText = msg;
  notification.appendChild(text);
  const actualizar = setInterval(() => {
    notification.classList.add("d-block");
    porcentaje -= 1;

    progressBar.style.width = porcentaje + "%";
    progressBar.setAttribute("aria-valuenow", porcentaje);
    if (porcentaje === 0) {
      notification.removeChild(text);
      notification.classList.add("d-none");
      clearInterval(actualizar);
      eventoTeclado.listen();
    }
  }, 50);
};

const funAtaque = (letra, vlr) => {
  eventoTeclado.simple_combo(`${letra}`, function () {
    const ataqueE = ataquesMatriz[3][Math.floor(Math.random() * ataquesMatriz[4].length)];
    const mensajeElemento = document.getElementById("mensaje");
    const svgObject_j = document.querySelector(`#svgObject-j`);
    const svgObject_e = document.querySelector(`#svgObject-e`);
    const svgObject_m = document.querySelector(`#svgObject-m`);
    const ele = `${ataquesMatriz[3][ataquesMatriz[3].indexOf(vlr)].charAt(0).toUpperCase()}${ataquesMatriz[3][ataquesMatriz[3].indexOf(vlr)].slice(1)}`
    const place = document.querySelector(`[placeholder="${ele}"]`);
    const btn = document.getElementsByClassName('input-group-text');

    const indexAtaqueE = ataquesMatriz[3].indexOf(ataqueE);
    const indexVlr = ataquesMatriz[3].indexOf(vlr);
    svgObject_j.setAttribute("data", `src/img/${vlr}.svg`);
    svgObject_e.setAttribute("data", `src/img/${ataqueE}.svg`);
    if(place.getAttribute('placeholder')==ele){
      place.style.backgroundColor = "aquamarine";
      btn[ataquesMatriz[3].indexOf(vlr)].style.backgroundColor = "aquamarine";
    }
    const valor = (valr = null, t = null) => {
      const progressBar = document.querySelector(`.progress`);
      eventoTeclado.stop_listening();
      acBarra("j", `Has atacado con ${vlr}`);
      acBarra("e", `Se ha defendido con ${ataqueE}`);
      (() => {
          mensajeElemento.style.display = "block";
          svgObject_m.setAttribute("data", `src/img/${ataquesMatriz[6][valr]}.svg`);
          // Cerrar automáticamente después de 5 segundos
          setTimeout(function() {
          mensajeElemento.style.display = "none";

        }, 5000);
      })();
      if (t !== null){
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      }
      if(valr == 2){
        console.log(vlr);
        console.log(ataquesMatriz[3].indexOf(vlr));
        setTimeout(() => {
          place.style.backgroundColor = "#e9ecef";
          btn[0].style.backgroundColor = "#e9ecef";
        }, 5000);
      }
    };

    if (indexAtaqueE === indexVlr) {
      console.log(
        `Has atacado con ${vlr} y el enemigo se ha defendido con ${ataqueE}, empate`
      );
      valor(2);
      return;
    } else if (ataquesMatriz[indexVlr][indexAtaqueE] === 1) {
      console.log(
        `Has atacado con ${vlr} y el enemigo se ha defendido con ${ataqueE}, perdiste`
      );
      valor(1, 0);
      return;
    } else {
      console.log(
        `Has atacado con ${vlr} y el enemigo se ha defendido con ${ataqueE}, ganaste`
      );
      valor(0, 0);
      return;
    }
  });
};



funAtaque(ataquesMatriz[4][0], obj[ataquesMatriz[4][0]]);
funAtaque(ataquesMatriz[4][1], obj[ataquesMatriz[4][1]]);
funAtaque(ataquesMatriz[4][2], obj[ataquesMatriz[4][2]]);
