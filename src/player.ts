import p5 from "p5";
import { Enemy } from "./enemy";
import { REL, scale } from "./scale";

export class Player {
  constructor(
    public x: number,
    public y: number,
    public size: number,
  ) {}

  update(dir: { x: number; y: number }, p: p5) {
    const half = this.size / 2;
    const speed = REL.speed * scale(p);
    const sizeIncrease = REL.sizeIncrease * scale(p);
    const nextX = this.x + dir.x * speed;
    const nextY = this.y + dir.y * speed;

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
        this.size += sizeIncrease;
        Enemy.kill(enemy);
      });
  }

  draw(p: p5, sprite: p5.Image) {
    p.image(sprite, this.x, this.y, this.size, this.size);
  }
}
