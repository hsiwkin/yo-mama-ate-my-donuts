import p5 from "p5";
import { REL, scale } from "./scale";

export class Enemy {
  static allEnemies: Enemy[] = [];

  private static sizeOf(p: p5) {
    return REL.donut * scale(p);
  }

  constructor(
    public x: number,
    public y: number,
  ) {}

  draw(p: p5, sprite: p5.Image) {
    const size = Enemy.sizeOf(p);
    p.image(sprite, this.x, this.y, size, size);
  }

  static drawAll(p: p5, sprite: p5.Image) {
    for (const enemy of Enemy.allEnemies) {
      enemy.draw(p, sprite);
    }
  }

  static initialize(p: p5): Enemy {
    const size = Enemy.sizeOf(p);
    const x = p.random(size / 2, p.width - size / 2);
    const y = p.random(size / 2, p.height - size / 2);

    const enemy = new Enemy(x, y);
    Enemy.allEnemies.push(enemy);
    return enemy;
  }

  static initializeAll(p: p5, count: number): Enemy[] {
    Enemy.allEnemies = [];
    for (let i = 1; i <= count; ++i) {
      Enemy.initialize(p);
    }

    return Enemy.allEnemies;
  }

  static kill(enemyToBeKilled: Enemy): void {
    this.allEnemies = this.allEnemies.filter(
      (enemy) => enemy !== enemyToBeKilled,
    );
  }

  static count(): number {
    return Enemy.allEnemies.length;
  }
}
