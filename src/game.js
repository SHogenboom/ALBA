// IMPORTS
import kaboom from "kaboom"; // javascript library for making games
import "./style.css"; // custom styling
// UTILITIES
import { GAME, UI } from "./utils/params.js"; // game parameters
import { loadAssets } from "./utils/loadAssets.js"; // load assets (sprites, fonts etc)
import { convertGridToCanvasPos } from "./utils/convertToCanvasPos.js"; // convert grid coordinates to canvas position
// ENTITIES
import { makePlayer } from "./entities/player.js"; // create player entity
import { makeFinish } from "./entities/finish.js";
import { makeGrid } from "./entities/grid.js";
// DEVELOPMENT
import { showGridIndices } from "./utils/showGridIndices.js";
import { createUI, showUI } from "./entities/UI.js";
import { showQuestion } from "./entities/question.js";

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

// INITIALIZE UI
// Create invisible boxes which position the components on screen
// Use showUI (below) to make them visible.
createUI(k);

// CREATE GRID
// Define the grid / tile structure
let gridElements = makeGrid(k);
// Add as a level to the game
const grid = k.addLevel(gridElements.layout, {
  // Size of the tiles
  tileWidth: GAME.tileSize,
  tileHeight: GAME.tileSize,
  // Position relative to top-left corner of the canvas
  pos: k.vec2(GAME.tileSize, GAME.tileSize),
  // Map ASCII symbols to sprites
  tiles: gridElements.tiles,
});

// CREATE PLAYER
let player = k.add(makePlayer(k)); // initialize, but does not show yet
player.pos = convertGridToCanvasPos(GAME.playerStartX, GAME.playerStartY, grid); // place on correct grid tile
player.play("move", { loop: true }); // start animation
player.z = UI.gridElements; // ensure plotted on top of grid.
player.flipX = GAME.finishX >= GAME.playerStartX; // face the player to the finish

// CREATE FINISH
let finish = k.add(makeFinish(k)); // initialize, but does not show yet
finish.pos = convertGridToCanvasPos(GAME.finishX, GAME.finishY, grid); // place on correct grid tile
finish.play("idle", { loop: true }); // start animation
finish.z = UI.gridElements; // ensure plotted on top of grid.

// QUESTION
// Show the question in the correct place on the canvas
showQuestion(k);

// DEVELOPMENT MODE
if (GAME.mode === "DEV") {
  k.debug.inspect = true; // Kaboom debug mode
  showUI(k); // visualize the UI components
  showGridIndices(k, grid); // for easier inspection of grid coordinates
}
