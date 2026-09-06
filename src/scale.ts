import p5 from "p5";

export const scale = (p: p5) => {
  return Math.min(p.width, p.height);
};

export const REL = {
  mama: 0.12,
  donut: 0.03,
  gameOverText: 0.1,
  speed: 0.008,
  sizeIncrease: 0.012,
};
