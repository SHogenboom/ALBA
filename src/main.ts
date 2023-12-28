// IMPORTS
import k from "./utils/kaboomContext.ts"; // kaboom context
import "./style.css"; // custom styling
// // UTILITIES
import { GAME, ITEM, LAYERS } from "./params.ts"; // ITEM parameters
import { loadAssets } from "./utils/loadAssets.ts"; // load assets (sprites, fonts etc)
import { convertGridToCanvasPos } from "./utils/convertToCanvasPos.ts"; // convert grid coordinates to canvas position
// ENTITIES
import { makePlayer } from "./entities/player.ts"; // create player entity
import { makeFinish } from "./entities/finish.ts";
import { makeGrid } from "./components/grid.ts";
// DEVELOPMENT
import { showGridIndices } from "./utils/showGridIndices.ts";
import { createUI, showUI } from "./components/UI.ts";
import { showQuestion } from "./components/question.ts";

// LOAD ASSETS
// wait for assets to load before continuing
loadAssets(k);

// INITIALIZE UI
// Create invisible boxes which position the components on screen
// Use showUI (below) to make them visible.
createUI(k);
showUI(k); // visualize the UI components

// CREATE GRID
// Define the grid / tile structure
const gridElements = makeGrid(k);

// Extract UI details so that the grid can be placed in the center
const gridBox = k.get("gridBox")[0];

// Add as a level to the ITEM
const grid = k.addLevel(gridElements.layout, {
  // Size of the tiles
  tileWidth: GAME.tileSize,
  tileHeight: GAME.tileSize,
  // First position relative to top-left corner of the canvas
  // Actual position can only be determined after the grid is created,
  //  because then the size is known
  pos: k.vec2(GAME.tileSize, GAME.tileSize),
  // Map ASCII symbols to sprites
  tiles: gridElements.tiles,
});

// Position the grid in the center of the screen
// NOTE; the position of the gridBox is determine from the top-left corner
// NOTE; there appears to be no way to extract a level's size (grid)
// So we instead do the computations.
const gridBoxCenterX = gridBox.pos.x + gridBox.width / 2;
const gridBoxCenterY = gridBox.pos.y + gridBox.height / 2;
// The grid is build up from the top-left corner, but anchored in the middle of the tiles
// For this reason, we need to offset by half the tile size
// NOTE: defining the position only works as array, not with named objects.
grid.pos = [
  gridBoxCenterX - (GAME.tileSize * ITEM.gridWidth) / 2 + GAME.tileSize / 2,
  gridBoxCenterY - (GAME.tileSize * ITEM.gridHeight) / 2 + GAME.tileSize / 2,
];
grid.z = LAYERS.ui; // ensure plotted below players etc.

// CREATE PLAYER
const player = makePlayer(k);
// Place player on correct grid tile
player.pos = convertGridToCanvasPos(
  k,
  ITEM.playerStartX,
  ITEM.playerStartY,
  grid
);

// CREATE FINISH
const finish = makeFinish(k); // initialize, but does not show yet
finish.pos = convertGridToCanvasPos(k, ITEM.finishX, ITEM.finishY, grid); // place on correct grid tile

// QUESTION
// Show the question in the correct place on the canvas
showQuestion(k);

// CODE BLOCKS
// The components 'code' that are available for answering the current item
// makeCodeBlocks(k);

// DEVELOPMENT MODE
if (GAME.mode === "DEV") {
  k.debug.inspect = true; // Kaboom debug mode
  showUI(k); // visualize the UI components
  showGridIndices(k, grid); // for easier inspection of grid coordinates
}
