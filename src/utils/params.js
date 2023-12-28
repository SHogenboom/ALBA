// GOAL
// This file holds all the general parameters / dimensions for the game

// GAME
// Dimensions were extracted from 'Rekentuin';

// GLOBAL VARIABLES
export const GAME = {
  width: 1000,
  height: 550,
  tileSize: 64,
  mode: "DEV", // DEV or PROD
  question: "How to get to the starfish?",
  // TODO: MAKE VARIABLE TO 'ITEM'
  gridWidth: 5, // keep as two separate variables for easier looping.
  gridHeight: 5,
  playerStartX: 2, // keep as two separate variables for easier indexing.
  playerStartY: 4,
  finishX: 4,
  finishY: 2,
};

// LAYERS
// Kaboom has removed the use of 'layers', now works with z-index
// Higher z-index means closer to the camera (plotted on top)
export const LAYERS = {
  ui: -10,
  gridElements: 10,
};

// USER INTERFACE
// Dimensions were adapted from 'Rekentuin;
let margin = 2; // leave some space between the outside of the screen and the UI components

// DEFINE FIXED COMPONENTS
// These components exist in the Rekentuin game and cannot be used by other elements.
const UI = {
  // Styling is used to visualize the UI components as boxes on the screen
  styling: {
    radius: 8,
    borderWidth: 3,
    color: [2, 58, 71], // #023a47
    fontSize: 24,
  },
  // Define the first set of known components
  components: {
    sidebar: {
      width: 120,
      height: GAME.height,
      pos: [GAME.width - 120, 0], // [x, y] - top-right of screen
      padding: [0, 0, 0, 0],
    },
    coins: {
      width: GAME.width - 120 - margin, // account for spacing of sidebar
      height: 60,
      pos: [0, GAME.height - 60], // [x, y] - bottom-left of screen
      padding: [10, 22, 0, 20], // top, right, bottom, left
    },
  },
};

// DEFINE NEW COMPONENTS
// Because we reuse the values from fixed/previous components, we can only define them after the original components have been defined
UI.components["grid"] = {
  // half of left-over space; account for spacing of sidebar and margins
  width: (GAME.width - UI.components.sidebar.width - 2 * margin) / 2,
  // account for spacing of sidebar, leave room for codeblocks (3/4 of vertical space) and margins
  height: ((GAME.height - UI.components.coins.height) / 4) * 3 - 3 * margin,
  pos: [margin, margin],
};

UI.components["codeblocks"] = {
  width: UI.components.grid.width,
  height:
    GAME.height -
    UI.components.coins.height -
    UI.components.grid.height -
    2 * margin,
  pos: [margin, UI.components.grid.height + margin],
};

UI.components["questionBox"] = {
  width:
    GAME.width -
    UI.components.sidebar.width -
    UI.components.grid.width -
    2 * margin,
  height: 100,
  pos: [UI.components.grid.width + margin, margin],
};

UI.components["algorithmUtils"] = {
  width: UI.components.questionBox.width,
  height: 100,
  pos: [
    UI.components.grid.width + margin,
    GAME.height - UI.components.coins.height - 100 - margin,
  ],
};

UI.components["algorithm"] = {
  width: UI.components.questionBox.width,
  height:
    GAME.height -
    UI.components.questionBox.height -
    UI.components.coins.height -
    UI.components.algorithmUtils.height -
    4 * margin,
  pos: [
    UI.components.grid.width + margin,
    UI.components.questionBox.height + 2 * margin,
  ],
};

export { UI };
