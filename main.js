import './style.css'
import Block from "./model/Block.js"
import Sprite from "./model/Sprite.js";
import Ball from "./model/Ball.js";
import Paddle from "./model/Paddle.js";

const canvas = 
  document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// way1.1: direct interaction with canvs
/*
ctx.beginPath();
// 20 right, 40 down, 50x50 rectangle (be careful about the coordinate system)
ctx.rect(20, 40, 50, 50); 
ctx.fillStyle = "red"
ctx.fill();
ctx.closePath();
*/

// way2.1
const redBlock = new Block(20, 40, 50, 50, "red");

// way1.2
/*
let [x , y] = [
  canvas.width / 2,
  canvas.height / 2,
];

let [dx , dy] = [2, -2];

// animate
function draw() {
  // drawing it, need to cleaning it to animate
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath();
  ctx.rect(x, y, 50, 50); 
  ctx.fillStyle = "blue"
  ctx.fill();
  ctx.closePath();

  x += dx;
  y += dy;

  window.requestAnimationFrame(draw); 
  // standard: 60 frames per second
}

draw();
*/

// way2.2
const blueSprite = new Sprite(
  canvas.width / 2, 
  canvas.height / 2,
  10,
  10,
  "blue",
  2,
  -2
);

const blueBall = new Ball(
  canvas.width / 2, 
  canvas.height / 2,
  10,
  10,
  "blue",
  2,
  -2
);


const paddle =  new Paddle(
  canvas.width / 2, 
  canvas.height - 10 ,
  80,
  10,
  "blue"
);

let gameGoing = true;

// one entry place to your game!
// do not only hide the "bricks" -> memory leak
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  // redBlock.draw(ctx);
  // blueSprite.draw(ctx);
  // blueSprite.move;

  blueBall.draw(ctx);
  blueBall.move();
  blueBall.collide(paddle);
  gameGoing = blueBall.bounce(canvas.width, canvas.height);

  paddle.draw(ctx);
  paddle.move(canvas.width);

  if (gameGoing) {
    window.requestAnimationFrame(draw); 
  } else {
    window.alert("Game Over");
  }
  
}

draw();