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

    this.x = p.constrain(nextX, half, p.width - half);
    this.y = p.constrain(nextY, half, p.height - half);

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

  draw(p: p5, sprite: p5.Image) {
    p.fill("white");
    // p.circle(this.x, this.y, this.size);
    p.image(
      sprite,
      this.x - this.size / 2,
      this.y - this.size / 2,
      this.size,
      this.size,
    );
  }
}
