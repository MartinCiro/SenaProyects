const sprite = document.querySelector('.sprite');
const animateButton = document.getElementById('animateButton');

let isAnimating = false;

animateButton.addEventListener('click', () => {
  if (isAnimating) {
    sprite.style.animationPlayState = 'paused';
  } else {
    sprite.style.animationPlayState = 'running';
  }
  isAnimating = !isAnimating;
});
