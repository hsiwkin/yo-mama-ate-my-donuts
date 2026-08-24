import p5 from "p5";

export class Enemy {
  static allEnemies: Enemy[] = [];

  constructor(
    public x: number,
    public y: number,
    readonly size = 10,
  ) {}

  draw(p: p5) {
    p.fill("#A13D63");

    p.square(this.x - this.size / 2, this.y - this.size / 2, this.size);
  }

  static drawAll(p: p5) {
    for (const enemy of Enemy.allEnemies) {
      enemy.draw(p);
    }
  }

  static initialize(p: p5): Enemy {
    const x = p.random(p.width);
    const y = p.random(p.height);

    const enemy = new Enemy(x, y);
    Enemy.allEnemies.push(enemy);
    return enemy;
  }

  static initializeAll(p: p5, count: number): Enemy[] {
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
}
