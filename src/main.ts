import p5 from "p5";
import "./style.css";
import { readMoveInput } from "./input";
import { Player } from "./entities/player";
import { Donut } from "./entities/donut";
import mamaUrl from "../assets/mama.png";
import donutUrl from "../assets/donut.png";
import { gameOverRender } from "./screens";
import { REL, scale } from "./scale";

const sketch = (p: p5) => {
  let player: Player;
  let mama: p5.Image;
  let donut: p5.Image;

  p.preload = () => {
    mama = p.loadImage(mamaUrl);
    donut = p.loadImage(donutUrl);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.imageMode(p.CENTER);
    resetGame();
  };

  p.draw = () => {
    if (Donut.count() === 0) {
      gameOverRender(p);
    } else {
      gameInProgressRender();
    }
  };

  p.keyPressed = () => {
    const key = p.key.toLowerCase();

    if (key === "r") {
      resetGame();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    // TODO: clamp player + donuts to the new canvas (Player.clamp / Donut.clampAll).
    // update() already constrains mama while playing; donuts keep old x,y and can sit off-screen.
  };

  const gameInProgressRender = () => {
    p.background("#F7A278");

    player.update(readMoveInput(p), p);

    player.draw(p, mama);
    Donut.drawAll(p, donut);
  };

  const resetGame = () => {
    player = new Player(p.width / 2, p.height / 2, REL.mama * scale(p));
    Donut.initializeAll(p, 30);
  };
};

new p5(sketch);
