const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var canvasContainer = document.getElementById('canvas-container');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
pbH=100/100;

// load images
const images = {};
images.player = new Image();
images.player.src = '../acces/sprite.png';

let playerWidth = images.player.width / 8;// "103.0625"; width/xFotogramaW
playerWidth=pbH*playerWidth;
let playerHeight = images.player.height / 1// "113.125"; Height/xFotogramaY
playerHeight=pbH*playerHeight;
let playerFrameX = 0; //inicio en x
let playerFrameY = 0; // inicio en y
let playerX = 0;
let playerY = 0;


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);
  if (playerFrameX < 8) playerFrameX++;
  else playerFrameX = 0;
}

window.onload = setInterval(animate, 1000 / 8);

window.addEventListener('resize', function () {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
})


function resizeCanvas() {
  canvas.width = 1952;//canvasContainer.clientWidth; <-supera el tamaño del contenedor
  canvas.height = 1135;//canvasContainer.clientHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();