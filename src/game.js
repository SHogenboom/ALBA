// IMPORTS
import kaboom from "kaboom"; // javascript library for making games
import "./style.css"; // custom styling
import { UI, LAYERS, GAME } from "./utils/params.js"; // game parameters
import { loadAssets } from "./utils/loadAssets.js"; // load assets (sprites, fonts etc)
import { makePlayer } from "./entities/player.js"; // create player entity
import { makeGrid } from "./entities/grid.js";
import { showGridIndices } from "./utils/showGridIndices.js";
import { showUI } from "./utils/showUI.js";

// CREATE GAME
const k = kaboom({
  width: GAME.width,
  height: GAME.height,
  canvas: document.querySelector("#game"),
  global: false,
  debug: GAME.mode === "DEV",
  // background: [255, 255, 255],
});

// LOAD ASSETS
// wait for assets to load before continuing
await loadAssets(k);

// CREATE PLAYER
let player = k.add(makePlayer(k));
player.play("move", { loop: true });

// CREATE GRID
let grid = makeGrid(k);
const gridLevel = k.addLevel(grid.layout, {
  // Size of the tiles
  tileWidth: GAME.tileSize,
  tileHeight: GAME.tileSize,
  // Position relative to top-left corner of the canvas
  pos: k.vec2(GAME.tileSize, GAME.tileSize),
  // Map ASCII symbols to sprites
  tiles: grid.tiles,
});

// DEVELOPMENT MODE
if (GAME.mode === "DEV") {
  k.debug.inspect = true; // Kabooms debug mode
  showGridIndices(k);
  showUI(k);
}
