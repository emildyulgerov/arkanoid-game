import { Brick } from "./Brick";
import { Vector } from "./Point";

export class InitCanvas {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D | null;
    public width: number;
    public height: number;
    public bricks: Brick[] = []
    public circle = new Vector(500, 500);
    public speed = 3;
    public vel = new Vector(this.speed, this.speed * 1.5)
    public mouse = {
        x: 420,
        y: 900
    }
    public isOver = false;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.canvas.addEventListener('mousemove', e => {
            this.mouse.x = e.offsetX;
            
        })
    }

    createBricks(): Brick[] {
        for (let i = 0; i < 25; i++) {
            for (let j = 2; j < 7; j++) {
                this.bricks.push({ x: 0 + i * 40, y: 0 + j * 20, active: true});
            }
        }
        return this.bricks;
    }

    clear(): void {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawBall(x: number, y: number): void {
        this.context.fillStyle = 'red';
        this.context.beginPath()
        this.context.arc(x, y, 10, 0, Math.PI * 2);
        this.context.fill();
        this.context.closePath();
    }


     moveBall() {
        this.circle.add(this.vel);
        if (this.circle.x + this.vel.x >= this.width - 10){
            this.vel.x = -this.speed * 1.5;
        }
        if (this.circle.y + this.vel.y >= this.height - 10){
            this.isOver = true;
        }
        if (this.circle.x - 10 <= 0){
            this.vel.x = this.speed * 1.5;
        }
        if (this.circle.y + this.vel.y <= 10){
            this.vel.y = this.speed * 1.5;
        }
    
        if (this.circle.y >= this.mouse.y - 10 && (this.circle.x >= this.mouse.x && this.circle.x <= this.mouse.x + 80)) {
            const centerPaddle = this.mouse.x + 40;
            const distFromCenter = this.circle.x - centerPaddle;
            this.vel.y = -this.speed * 1.5;
            this.vel.x = distFromCenter * 0.20;
        }
    }
}