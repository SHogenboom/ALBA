import kaboom from "kaboom"; // javascript library for making games

// CREATE GAME
const k = kaboom({
  width: 1000,
  height: 550,
  canvas: document.querySelector("#game") as HTMLCanvasElement,
  global: false,
  debug: true,
  // background: [255, 255, 255],
});

export default k;
