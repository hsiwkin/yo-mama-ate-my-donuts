import p5 from "p5";
import { REL, scale } from "./scale";

export class Donut {
  static all: Donut[] = [];

  private static sizeOf(p: p5) {
    return REL.donut * scale(p);
  }

  constructor(
    public x: number,
    public y: number,
  ) {}

  draw(p: p5, sprite: p5.Image) {
    const size = Donut.sizeOf(p);
    p.image(sprite, this.x, this.y, size, size);
  }

  static drawAll(p: p5, sprite: p5.Image) {
    for (const donut of Donut.all) {
      donut.draw(p, sprite);
    }
  }

  static initialize(p: p5): Donut {
    const size = Donut.sizeOf(p);
    const x = p.random(size / 2, p.width - size / 2);
    const y = p.random(size / 2, p.height - size / 2);

    const donut = new Donut(x, y);
    Donut.all.push(donut);
    return donut;
  }

  static initializeAll(p: p5, count: number): Donut[] {
    Donut.all = [];
    for (let i = 1; i <= count; ++i) {
      Donut.initialize(p);
    }

    return Donut.all;
  }

  static eat(donutToBeEaten: Donut): void {
    this.all = this.all.filter((donut) => donut !== donutToBeEaten);
  }

  static count(): number {
    return Donut.all.length;
  }
}
