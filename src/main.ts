import p5 from "p5";
import "./style.css";
import { readMoveInput } from "./input";
import { Player } from "./player";
import { Enemy } from "./enemy";

const sketch = (p: p5) => {
  let player: Player;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);

    player = new Player(p.width / 2, p.height / 2);
    Enemy.initializeAll(p, 30);
  };

  p.draw = () => {
    p.background("#F7A278");

    player.update(readMoveInput(p));
    player.draw(p);
    Enemy.drawAll(p);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch);
