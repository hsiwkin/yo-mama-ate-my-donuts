import p5 from "p5";

export function readMoveInput(p: p5) {
  return {
    x:
      (p.keyIsDown(p.RIGHT_ARROW) || p.keyIsDown(68) ? 1 : 0) -
      (p.keyIsDown(p.LEFT_ARROW) || p.keyIsDown(65) ? 1 : 0),
    y:
      (p.keyIsDown(p.DOWN_ARROW) || p.keyIsDown(83) ? 1 : 0) -
      (p.keyIsDown(p.UP_ARROW) || p.keyIsDown(87) ? 1 : 0),
  };
}
