const spriteElement = document.getElementById('sprite');
    let frame = 0;
    setInterval(() => {
      frame = (frame + 1) % 2;
      spriteElement.style.backgroundPosition = `-${frame * 10}px 0`;
    }, 200); // Velocidad de la animación en milisegundos