
export class InitCanvas {
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D | null;
    public width: number;
    public height: number;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    clear(): void {
        this.context?.clearRect(0, 0, this.width, this.height);
    } 
}