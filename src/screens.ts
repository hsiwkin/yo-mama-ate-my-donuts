import p5 from "p5";
import { REL, scale } from "./scale";

export const gameOverRender = (p: p5) => {
  p.background("#7EB77F");

  p.fill("#F92A82");
  p.textSize(REL.gameOverText * scale(p));
  p.textAlign(p.CENTER, p.CENTER);
  p.text("Game Over!", p.width / 2, p.height / 2);
};
