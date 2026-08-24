export type Point = {
  x: number;
  y: number;
};

export type GameState = {
  player: {
    position: Point;
    size: number;
  };
  enemies: {
    positions: Point[];
    size: number;
  };
};
