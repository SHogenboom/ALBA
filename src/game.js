// IMPORTS
import kaboom from "kaboom"; // javascript library for making games
import "./style.css"; // custom styling

// GLOBAL VARIABLES// 540 x 960 pixels, 16:9 ratio
const gameWidth = 960;
const gameHeight = 540;

// CREATE GAME
const k = kaboom({
  width: gameWidth,
  height: gameHeight,
  canvas: document.querySelector("#game"),
  global: false,
});
