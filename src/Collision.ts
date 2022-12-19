import { Brick } from "./Brick";
import { Paddle } from "./Paddle";
import { Ball } from "./Ball";

export class Collision {

    constructor(){}

    paddleCheck(paddle: Paddle, ball: Ball) {
        if (ball.circle.y + ball.vel.y >= paddle.y - ball.vel.y) {
            if (ball.circle.x + ball.vel.x >= paddle.x && ball.circle.x + ball.vel.x <= paddle.x + paddle.width) {
                const paddleCenter = paddle.x + paddle.width / 2;
                const distFromCenter = ball.circle.x - paddleCenter;
                ball.vel.x = distFromCenter * 0.05
                ball.vel.y = -ball.vel.y * 1.0001
            }
        }
    }

    brickCheck(bricks: Brick[], ball: Ball) {
        bricks.forEach(brick => {
            if (ball.circle.x < brick.x + brick.width &&
                ball.circle.x + ball.radius > brick.x &&
                ball.circle.y < brick.y + brick.height &&
                ball.circle.y + ball.radius > brick.y + brick.height
            ) {
                brick.isActive = false;
                ball.vel.y = -ball.vel.y;
            }
        });
    }
}