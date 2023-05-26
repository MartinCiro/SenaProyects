const spriteAnimation = new SpriteAnimation(
    "sprite-animation", // ID del elemento HTML
    "salida.jpg", // Ruta de la imagen del sprite
    100, // Ancho de cada frame del sprite
    100, // Altura de cada frame del sprite
    10, // Número total de frames en el sprite
    200 // Duración en milisegundos de cada frame
);

class SpriteAnimation {
    constructor(elementId, spriteUrl, frameWidth, frameHeight, totalFrames, duration) {
        this.element = document.getElementById(elementId);
        this.sprite = new Image();
        this.sprite.src = spriteUrl;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.totalFrames = totalFrames;
        this.duration = duration;
        this.currentFrame = 0;

        this.startAnimation();
    }

    startAnimation() {
        this.element.style.width = this.frameWidth + "px";
        this.element.style.height = this.frameHeight + "px";
        this.element.style.backgroundImage = `url(${this.sprite.src})`;
        this.element.style.backgroundRepeat = "no-repeat";

        this.animate();
    }

    animate() {
        const frameX = (this.currentFrame % 10) * this.frameWidth;
        const frameY = Math.floor(this.currentFrame / 10) * this.frameHeight;

        this.element.style.backgroundPosition = `-${frameX}px -${frameY}px`;

        this.currentFrame++;

        if (this.currentFrame >= this.totalFrames) {
            this.currentFrame = 0;
        }

        setTimeout(() => {
            this.animate();
        }, this.duration);
    }
}
