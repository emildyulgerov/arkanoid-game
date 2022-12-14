export interface Brick {
    x: number,
    y: number,
    active: boolean,
    width: number,
    height: number,
}


export class BrickController {
    public bricks: Brick[] = [];

    constructor(public context: CanvasRenderingContext2D){
        this.context = context;
    }
    createBricks(): Brick[] {
        for (let i = 0; i < 25; i++) {
            for (let j = 2; j < 7; j++) {
                this.bricks.push({ x: 0 + i * 40, y: 0 + j * 20, active: true, width: 40, height: 20});
            }
        }
        return this.bricks;
    }

    drawBricks(bricks: Brick[]) {
        for (let el of bricks){
            if (el.active){
                this.context.fillStyle = 'green';
                this.context.beginPath();
                this.context.rect(el.x, el.y, 40, 20);
                this.context.fill();
                this.context.stroke();
            }
        }
    }
}