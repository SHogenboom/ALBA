import kaboom from "kaboom"; // javascript library for making games
import flexUIPlugin from "kaboom-flex-ui"; // to create UI components

// CREATE GAME
const k = kaboom({
  width: 1000,
  height: 550,
  canvas: document.querySelector("#game") as HTMLCanvasElement,
  global: false,
  debug: true,
  // background: [255, 255, 255],
  plugins: [flexUIPlugin],
});

export default k;
