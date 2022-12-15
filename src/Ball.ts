import { height, width, x, y } from ".";
import { Brick } from "./Brick";
import { Paddle } from "./Paddle";
import { Vector } from "./Point";

export class Ball {
    public radius = 10;
    public circle = new Vector(500, 500);
    public alive = true;
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

        if (this.circle.y > height - 10){
            this.alive = false;
        }
        if (this.circle.x >= width - 10){
            this.vel.x = -this.vel.x * 1.2
        }
        if (this.circle.y <= 10){
            this.vel.y = -this.vel.y * 1.2;
        }
        if (this.circle.x <= 10){
            this.vel.x = -this.vel.x * 1.2
        }
    }
    paddleCheck(paddle: Paddle){
        if(this.circle.y + this.vel.y >= paddle.y - this.vel.y){
            if(this.circle.x + this.vel.x >= paddle.x && this.circle.x + this.vel.x <= paddle.x + paddle.width){
                const paddleCenter = paddle.x + paddle.width / 2;
                const distFromCenter = this.circle.x - paddleCenter;
                this.vel.x = distFromCenter * 0.05
                this.vel.y = -this.vel.y * 1.0001
            }
        }
    }

    brickCheck(bricks: Brick[]){
        for (let b of bricks){
            if (this.circle.x > b.x && this.circle.x < b.x + b.width
                && this.circle.y + this.radius > b.y
                && this.circle.y - this.radius < b.y + b.height){
                    if(this.sideBrickHit(b)){
                        this.vel.x = -this.vel.x;
                        console.log('sidehit')
                    } else {
                        this.vel.y = -this.vel.y 
                        b.active = false;
                    }
                } 
        }
    }
    sideBrickHit(brick: Brick): boolean{
        return this.circle.y > brick.y && this.circle.y < brick.y + brick.height && this.circle.x >= brick.x && this.circle.x <= brick.x + brick.width;
        //return this.circle.y > brick.y + this.vel.y && this.circle.y < brick.y + brick.height + this.vel.y;
    }
    
        
}
