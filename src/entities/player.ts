import p5 from "p5";
import { Donut } from "./donut";
import { REL, scale } from "../scale";

export class Player {
  private eatenDonutsCount = 0;

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

    Donut.all
      .filter((donut) => {
        const distance = Math.sqrt(
          Math.pow(donut.x - this.x, 2) + Math.pow(donut.y - this.y, 2),
        );

        return distance <= this.size / 2;
      })
      .forEach((donut: Donut) => {
        this.size += sizeIncrease;
        this.eatenDonutsCount++;
        Donut.eat(donut);
      });
  }

  draw(p: p5, sprite: p5.Image) {
    p.textAlign(p.CENTER, p.CENTER);

    p.image(sprite, this.x, this.y, this.size, this.size);
    p.fill("#F92A82");
    p.noStroke();
    p.textSize(this.size * 0.1);
    p.text(String(this.eatenDonutsCount), this.x, this.y + this.size * 0.28);
  }
}
