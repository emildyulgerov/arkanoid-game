import { Ball } from "./Ball";
import { InitCanvas } from "./Canvas";
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


start()
function start(){
    canvasController.clear();
    ball.drawBall();
    ball.moveBall();
    requestAnimationFrame(start);
}