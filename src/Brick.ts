export class Brick {

    public isActive = true;
    private bricks: Brick[] = [];
    private brickRows = 4;
    private brickCols = 11;

    constructor(
        public context: CanvasRenderingContext2D,
        public x?: number,
        public y?: number,
        public width?: number,
        public height?: number,
        public color?: string
    ) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    drawBrick() {
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

    createBricks(): Brick[] {
        for (let y = 0; y < this.brickRows; y++) {
            for (let x = y; x < this.brickCols - y; x++) {
                let brick = new Brick(this.context, 50 + x * 80, 50 + y * 20, 80, 20, 'orange');
                this.bricks.push(brick);
            }
        }
        return this.bricks;
    }

    drawBricks(): void {
        this.bricks.forEach(b => {
            if (b.isActive) {
                b.drawBrick();
            }
        });
    }
}
