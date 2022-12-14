import { InitCanvas } from "./Canvas";

const canvas = new InitCanvas('my-canvas');
// canvas.width = 1000;
// canvas.height = 1000;


draw();

function draw(){
canvas.drawPaddle(400,700,200,200,'skyblue'),
requestAnimationFrame(draw);
}

