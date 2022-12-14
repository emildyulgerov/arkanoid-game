import { Ball } from "./Ball";
import { InitCanvas } from "./Canvas";
import { Paddle } from "./Paddle";
import { Point, Vector } from "./Point";

const canvasEl = document.getElementById('my-canvas') as HTMLCanvasElement;
const context = canvasEl.getContext('2d');


export const width = canvasEl.width;
export const height = canvasEl.height


const canvasController = new InitCanvas('my-canvas');

export const x = width / 2;
export const y = height - 500;

const speed = 3;
const vel = new Vector(speed, speed * 1.5);


const ball = new Ball(context, vel, x, y);

const paddle = new Paddle(context,400,900,200,40,'skyblue');



start()
function start(){
    canvasController.clear();
    ball.drawBall();
    ball.moveBall();
    paddle.drawPaddle();
    paddle.movePaddle();
    requestAnimationFrame(start);
}