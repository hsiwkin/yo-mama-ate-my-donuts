import p5 from "p5";
import "./style.css";
import { readMoveInput } from "./input";
import { Player } from "./player";
import { Enemy } from "./enemy";
import mamaUrl from "../assets/mama.png";
import donutUrl from "../assets/donut.png";

const sketch = (p: p5) => {
  let player: Player;
  let mama: p5.Image;
  let donut: p5.Image;

  p.preload = () => {
    console.log("mamaUrl", mamaUrl);
    mama = p.loadImage(mamaUrl);
    donut = p.loadImage(donutUrl);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.imageMode(p.CENTER);
    resetGame();
  };

  p.draw = () => {
    if (Enemy.count() === 0) {
      gameOverRender();
    } else {
      gameInProgressRender();
    }
  };

  p.keyPressed = () => {
    if (p.key.toLowerCase() === "r") {
      resetGame();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  const gameOverRender = () => {
    p.background("#7EB77F");

    p.fill("#F92A82");
    p.textSize(100);
    p.textAlign(p.CENTER, p.CENTER);
    p.text("Game Over!", p.width / 2, p.height / 2);
  };

  const gameInProgressRender = () => {
    p.background("#F7A278");

    player.update(readMoveInput(p), p);

    player.draw(p, mama);
    Enemy.drawAll(p, donut);
  };

  const resetGame = () => {
    player = new Player(p.width / 2, p.height / 2);
    Enemy.initializeAll(p, 30);
  };
};

new p5(sketch);
