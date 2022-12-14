import { Ball } from "./Ball";
import { BrickController } from "./Brick";
import { InitCanvas } from "./Canvas";
import { Paddle } from "./Paddle";
import { Point, Vector } from "./Point";

const canvasEl = document.getElementById('my-canvas') as HTMLCanvasElement;
const context = canvasEl.getContext('2d');
const mouse = {
    x: 500
}
canvasEl.addEventListener('mousemove', e => {
    mouse.x = e.offsetX;
})

export const width = canvasEl.width;
export const height = canvasEl.height


const canvasController = new InitCanvas('my-canvas');

export const x = width / 2;
export const y = height - 500;




const speed = 3;
const vel = new Vector(speed, speed * 1.5);


const ball = new Ball(context, vel, x, y);
const alive = ball.alive;
let bricks = new BrickController(context);

let brickArr = bricks.createBricks();

start()
function start(){
    const paddle = new Paddle(context, mouse.x, height - 100, 200, 50, 'skyblue');
    canvasController.clear();
    brickArr = brickArr.filter(b => b.active);
    if (brickArr.length == 0){
        alert('You won!');
        ball.alive = false;
    }
    ball.brickCheck(brickArr);
    bricks.drawBricks(brickArr);
    ball.drawBall();
    ball.moveBall();
    ball.paddleCheck(paddle);
    paddle.drawPaddle(mouse.x);
    if (ball.alive){
        requestAnimationFrame(start);
    }
}
