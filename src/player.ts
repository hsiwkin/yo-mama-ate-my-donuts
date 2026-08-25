import p5 from "p5";
import { Enemy } from "./enemy";

export class Player {
  constructor(
    public x: number,
    public y: number,
    public size = 100,
    readonly speed = 5,
    readonly sizeIncrease = 10,
  ) {}

  update(dir: { x: number; y: number }, p: p5) {
    const half = this.size / 2;
    const nextX = this.x + dir.x * this.speed;
    const nextY = this.y + dir.y * this.speed;

    if (nextX < half) this.x = half;
    else if (nextX > p.width - half) this.x = p.width - half;
    else this.x = nextX;

    if (nextY < half) this.y = half;
    else if (nextY > p.height - half) this.y = p.height - half;
    else this.y = nextY;

    Enemy.allEnemies
      .filter((enemy) => {
        const distance = Math.sqrt(
          Math.pow(enemy.x - this.x, 2) + Math.pow(enemy.y - this.y, 2),
        );

        return distance <= this.size / 2;
      })
      .forEach((enemy: Enemy) => {
        this.size += this.sizeIncrease;
        Enemy.kill(enemy);
      });
  }

  draw(p: p5) {
    p.fill("white");
    p.circle(this.x, this.y, this.size);
  }
}
