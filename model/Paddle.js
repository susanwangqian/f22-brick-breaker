import Sprite from "./Sprite.js";

class Paddle extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color, 0, 0); // initial: not moving -> 0,0
    document.addEventListener(
        "keydown", 
        this.keyDownHandler.bind(this)
    );
    document.addEventListener(
        "keyup", 
        this.keyUpHandler.bind(this)
    );
  }

  keyDownHandler(event) {
    if (event.key === "Right" || event.key === "ArrowRight") { //sprite's dx
      this.dx = 2;
    } else if (event.key === "Left" || event.key === "ArrowLeft") {
      this.dx = -2;
    }
  }

  keyUpHandler(event) {
    if (event.key === "Right" || event.key === "ArrowRight") { // stop moving L/R
      this.dx = 0;
    } else if (event.key === "Left" || event.key === "ArrowLeft") {
      this.dx = 0;
    }
  }

  // override the move method to restrict the paddle
  move(canvasWidth) {
    super.move();
    if (this.x < 0) { // left side
      this.x = 0;
    } else if (this.x + this.width > canvasWidth) { // right side, + right side of the paddle
      this.x = canvasWidth - this.width;
    }
  }

}

export default Paddle;