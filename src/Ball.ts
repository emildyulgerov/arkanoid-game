import { height, width, x, y } from ".";
import { Vector } from "./Point";

export class Ball {
    public radius = 10;
    public circle = new Vector(500, 500);
    constructor(public context: CanvasRenderingContext2D,
        public vel: Vector,
        public x: number,
        public y: number){}

    drawBall(): void {
        this.context.fillStyle = 'red';
        this.context.beginPath()
        this.context.arc(this.circle.x, this.circle.y, this.radius, 0, Math.PI * 2);
        this.context.fill();
        this.context.closePath();
    }

    moveBall(){
        this.circle.add(this.vel)

        if (this.circle.y >= height - 10){
            this.vel.y = -this.vel.y;
        }
        if (this.circle.x >= width - 10){
            this.vel.x = -this.vel.x
        }
        if (this.circle.y <= 10){
            this.vel.y = -this.vel.y;
        }
        if (this.circle.x <= 10){
            this.vel.x = -this.vel.x
        }
    }
        
}
