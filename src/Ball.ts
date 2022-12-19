import { height, width} from ".";
import { Brick, BrickController } from "./Brick";
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

        if (this.circle.y > height - this.vel.y - this.radius){
            this.alive = false;
        }
        if (this.circle.x > width - 10){
            this.vel.x = -this.vel.x
        }
        if (this.circle.y < 10){ 
            const mid = width / 2;
            const dist = this.circle.x - mid;
            this.vel.x = dist * 0.005
            this.vel.y = -this.vel.y;
        }
        if (this.circle.x < 10){
            this.vel.x = -this.vel.x
        }
    }
    paddleCheck(paddle: Paddle){
        if(this.circle.y + this.vel.y > paddle.y - this.vel.y - this.radius / 2 && this.vel.y > 0){
            if(this.circle.x + this.vel.x > paddle.x && this.circle.x + this.vel.x < paddle.x + paddle.width){
                const paddleCenter = paddle.x + paddle.width / 2;
                const distFromCenter = this.circle.x - paddleCenter;
                this.vel.x = distFromCenter * 0.05
                this.vel.y = -this.vel.y * 1.0001
            }
        }
    }

    brickCheck(bricks: Brick[]){
        for (let b of bricks){
            if (this.circle.x + this.radius > b.x && this.circle.x - this.radius < b.x + b.width
                && this.circle.y + this.radius > b.y
                && this.circle.y - this.radius < b.y + b.height){
                    const leftSide = b.x;
                    const rightSide = b.x + b.width;
                    const topSide = b.y;
                    const bottomSide = b.y + b.height;
                    const center = b.y + b.height / 2;
                    if (this.circle.y > topSide && this.circle.y < bottomSide && this.circle.x < leftSide){
                        if (this.vel.x > 0){
                            this.vel.x = -this.vel.x * 1.0001;
                            b.isActive = false
                        }  
                    } else if (this.circle.y > topSide && this.circle.y < bottomSide && this.circle.x > rightSide){
                        if (this.vel.x < 0){
                            this.vel.x = -this.vel.x * 1.0001;
                            b.isActive = false
                        }
                    } else if (this.circle.y < center){
                        if (this.vel.y > 0){
                            this.vel.y = -this.vel.y * 1.0001;
                            b.isActive = false
                        }
                    } else {
                        if (this.vel.y < 0) {
                            this.vel.y = -this.vel.y * 1.0001
                            b.isActive = false;
                        }
                    }
                } 
        }
    }
    sideBrickHit(brick: Brick): boolean{
        return this.circle.y + this.radius >= brick.y && this.circle.y + this.radius <= brick.y + brick.height
    }
}
