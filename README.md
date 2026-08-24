# Yo Mama Ate My Donuts

Eat the donuts. Get bigger. Roast whoever is left.

A browser arena where you vacuum up donuts and grow. Right now it is a local prototype: one player, a pile of snacks, WASD or arrows.

## Play

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

**Move:** WASD or arrow keys  
**Goal:** run over the small circles (donuts). Each one makes you bigger.

## What’s in the prototype

- Full-window p5 canvas
- One player (white circle)
- 30 donuts spawned at random
- Eat a donut → size +10, donut disappears

Built with [p5.js](https://p5js.org/) and TypeScript.

## Next

- More players, including a user-picked number of LLM opponents
- Sideline commentator (LLM) in the vein of angry sports broadcast — trash talk, yo-mama lines
- Commentator can cheat for an AI buddy: screen shake and other dirty effects
- Optional square “growing tiles” silhouette instead of a circle

## Repo

Source lives in `src/`. Main loop is `src/main.ts`.
