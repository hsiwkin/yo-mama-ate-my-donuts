import p5 from "p5";

export class Enemy {
  static allEnemies: Enemy[] = [];
  static size = 10;

  constructor(
    public x: number,
    public y: number,
  ) {}

  draw(p: p5) {
    p.fill("#A13D63");

    // p.square(this.x - this.size / 2, this.y - this.size / 2, this.size);
    p.circle(this.x - Enemy.size / 2, this.y - Enemy.size / 2, Enemy.size);
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
