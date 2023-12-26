// import kaboom lib
import kaboom from "kaboom";

// GLOBAL VARIABLES// 540 x 960 pixels, 16:9 ratio
const gameWidth = 960;
const gameHeight = 540;

// CREATE GAME
kaboom({
  width: gameWidth,
  height: gameHeight,
  canvas: document.querySelector("#game"),
});
