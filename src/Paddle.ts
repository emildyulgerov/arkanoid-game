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
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drawPaddle(): void {
        if (this.color) {
            this.context.fillStyle = this.color;
        }
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }

    movePaddle(): void {  
        document.addEventListener('keydown', event => {
        
            if (event.code == 'ArrowRight') {
                if (this.x <= 1000 - this.width) {
                    this.x += this.speed.x
                }

            } else if (event.code == 'ArrowLeft') {
                if (this.x >= 0) {
                    this.x -= this.speed.x
                }
            }
        })
    }
}