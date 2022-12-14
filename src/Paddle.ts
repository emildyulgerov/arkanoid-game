import { height, width } from ".";
import { Point } from "./Point";

export class Paddle {

    private speed: Point = { x: 0.1, y: 0 };

    constructor(
        public context: CanvasRenderingContext2D,
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public color?: string
        ){
        this.x = x;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drawPaddle(x: number): void {
        if (this.color) {
            this.context.fillStyle = this.color;
        }
        this.context.beginPath();
        if (x >= width - this.width){
            x = width - this.width;
        } else if (x <= 0){
            x = 0 
        }
        this.context.rect(x, this.y, this.width, this.height);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
}