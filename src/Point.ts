export interface Point {
    x: number;
    y: number
}

export class Vector implements Point {
    constructor(public x: number, public y: number)
    {

    }

    add(p: Point){
        this.x += p.x;
        this.y += p.y;
    }

}