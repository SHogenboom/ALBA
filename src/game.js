// IMPORTS
import kaboom from "kaboom"; // javascript library for making games
import "./style.css"; // custom styling
import { loadAssets } from "./utils/loadAssets.js"; // load assets (sprites, fonts etc)
import { makePlayer } from "./entities/player.js"; // create player entity
import { makeGrid } from "./entities/grid.js";
import { showGridIndices } from "./utils/showGridIndices.js";
import { showUI } from "./utils/showUI.js";

// GLOBAL VARIABLES
const gameWidth = 1000;
const gameHeight = 550;
const gridWidth = 5;
const gridHeight = 5;
const tileSize = 64;
const startX = 2;
const startY = 4;

// CREATE GAME
const k = kaboom({
  width: gameWidth,
  height: gameHeight,
  canvas: document.querySelector("#game"),
  global: false,
  debug: true,
  // background: [255, 255, 255],
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
let grid = makeGrid(k, gridWidth, gridHeight);
const gridLevel = k.addLevel(grid.layout, {
  // Size of the tiles
  tileWidth: tileSize,
  tileHeight: tileSize,
  // Position relative to top-left corner of the canvas
  pos: k.vec2(tileSize, tileSize),
  // Map ASCII symbols to sprites
  tiles: grid.tiles,
});

player.pos.x = startX * tileSize;
player.pos.y = startY * tileSize;
player.z = 10;

showGridIndices(k, gridWidth, gridHeight, tileSize);

showUI(k);
