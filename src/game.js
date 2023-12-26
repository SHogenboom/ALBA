// IMPORTS
import kaboom from "kaboom"; // javascript library for making games
import "./style.css"; // custom styling
import { loadAssets } from "./utils/loadAssets.js"; // load assets (sprites, fonts etc)
import { makePlayer } from "./entities/player.js"; // create player entity
import { makeGrid } from "./entities/grid.js";

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
  debug: true,
  background: [255, 255, 255],
});

// enter inspect mode
// k.debug.inspect = true;

// LOAD ASSETS
// wait for assets to load before continuing
await loadAssets(k);

// CREATE PLAYER
let player = k.add(makePlayer(k));
player.play("move", { loop: true });

// CREATE GRID
let grid = makeGrid(k, 5, 5);
k.addLevel(grid.layout, {
  // Size of the tiles
  tileWidth: 64,
  tileHeight: 64,
  // Position relative to top-left corner of the canvas
  pos: k.vec2(25, 25),
  // Map ASCII symbols to sprites
  tiles: grid.tiles,
});
