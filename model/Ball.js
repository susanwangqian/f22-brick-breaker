import Sprite from "./Sprite.js";

class Ball extends Sprite {
    constructor(x, y, width, height, color, dx, dy) {
        super(x, y, width, height, color, dx, dy);
    }

    bounce(canvasWidth, canvasHeight) {
        if (this.x < 0) {
          // bounce off the left edge
          this.dx *= -1; // switch direction
        } else if (this.x + this.width > canvasWidth) { // account for not only the upper left corner
          // bounce off the right edge
          this.dx *= -1;
        }
      
        if (this.y < 0) {
          // bounce off the top edge
          this.dy *= -1; // switch direction
        } else if (this.y + this.height > canvasHeight) { // account for not only the upper left corner
          // bounce off the bottom edge
          // this.dy *= -1;
          return false; // reach the bottom, game over
        }
        return true;
    }

    collide (paddle) {
      if (this.intersects(paddle)) {
        this.dy *= -1; // ball collide the paddle like collide the bottom of canvas
      }
    }
}

export default Ball;