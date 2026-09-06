import p5 from "p5";

export class Enemy {
  static allEnemies: Enemy[] = [];
  private static size = 10;

  constructor(
    public x: number,
    public y: number,
  ) {}

  draw(p: p5) {
    p.fill("#A13D63");

    p.circle(this.x, this.y, Enemy.size);
  }

  static drawAll(p: p5) {
    for (const enemy of Enemy.allEnemies) {
      enemy.draw(p);
    }
  }

  static initialize(p: p5): Enemy {
    const x = p.random(Enemy.size / 2, p.width - Enemy.size / 2);
    const y = p.random(Enemy.size / 2, p.height - Enemy.size / 2);

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
