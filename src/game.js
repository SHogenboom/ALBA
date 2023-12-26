// IMPORTS
import kaboom from "kaboom"; // javascript library for making games
import "./style.css"; // custom styling
import { loadAssets } from "./utils/loadAssets.js"; // load sprites

// GLOBAL VARIABLES
// 540 x 960 pixels, 16:9 ratio
const gameWidth = 960;
const gameHeight = 540;

// CREATE GAME
const k = kaboom({
  width: gameWidth,
  height: gameHeight,
  canvas: document.querySelector("#game"),
  global: false,
});

// LOAD ASSETS
// wait for assets to load before continuing
await loadAssets(k);

let player = k.add([
  k.sprite("player"), // load the player assets (defined in loadSprites)
  k.pos(k.center()), // place in middle of screen
  k.area(), // add area to the image so we can use it for collision detection
  k.anchor("center"), // define position from center of image
  k.scale(0.5), // scale image down to 50% to fit in grid tiles
]);

player.play("move", { loop: true });
