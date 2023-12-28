// GOAL
// This file holds all the general parameters / dimensions for the game

// IMPORT TYPES
import type { UIComponents, Component } from "./utils/types.ts";

// GAME
// Dimensions were extracted from 'Rekentuin';
export const GAME = {
  width: 1000,
  height: 550,
  tileSize: 64,
  mode: "DEV", // DEV or PROD
};

// TODO: MAKE VARIABLE
export const ITEM = {
  question: "How to get to the starfish",
  // keep X AND Y as two separate variables for easier looping.
  gridWidth: 5,
  gridHeight: 5,
  playerStartX: 2,
  playerStartY: 4,
  finishX: 4,
  finishY: 2,
  usedCodeBlocks: ["right", "up"], // Select which codeblocks are available for use in the current item.
};

// STYLING
export const STYLING = {
  // NOTE: should be in the order the images appear in the spritesheet!
  codeBlockSprites: ["down", "left", "right", "up"],
  // Styling is used to visualize the UI components as boxes on the screen
  styling: {
    radius: 8,
    borderWidth: 3,
    color: { r: 2, g: 58, b: 71 }, // #023a47
    fontSize: 24,
  },
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
const margin = 2; // leave some space between the outside of the screen and the UI components

// DEFINE FIXED COMPONENTS
// These components exist in the Rekentuin game and cannot be used by other elements.

// INITIALIZE EMPTY = PROPER VALUES COMPUTED BELOW!
// Needed to prevent typescript issues with non filled components
const emptyComponent: Component = {
  width: 0,
  height: 0,
  pos: { x: 0, y: 0 }, // [x, y] - top-right of screen
  padding: [0, 0, 0, 0],
};

const UI = {
  // Define the first set of known components
  sidebar: {
    width: 120,
    height: GAME.height,
    pos: { x: GAME.width - 120, y: 0 }, // [x, y] - top-right of screen
    padding: [0, 0, 0, 0],
  },
  coins: {
    width: GAME.width - 120 - margin, // account for spacing of sidebar
    height: 60,
    pos: { x: 0, y: GAME.height - 60 }, // [x, y] - bottom-left of screen
    padding: [10, 22, 0, 20], // top, right, bottom, left
  },
  gridBox: emptyComponent,
  codeblocksBox: emptyComponent,
  questionBox: emptyComponent,
  algorithmBoxUtilsBox: emptyComponent,
  algorithmBox: emptyComponent,
} as UIComponents;

// DEFINE NEW COMPONENTS
// Because we reuse the values from fixed/previous components
// .. we can only define them after the original components have been defined
// Typescript does no know whether all values were actually assigned,
// .. so we need to check this manually to prevent errors.
UI["gridBox"] = {
  // half of left-over space; account for spacing of sidebar and margins
  width: (GAME.width - UI.sidebar.width - 2 * margin) / 2,
  // account for spacing of sidebar, leave room for codeblocksBox (3/4 of vertical space) and margins
  height: ((GAME.height - UI.coins.height) / 4) * 3 - 3 * margin,
  pos: { x: margin, y: margin },
};

UI["codeblocksBox"] = {
  width: UI.gridBox.width,
  height: GAME.height - UI.coins.height - UI.gridBox.height - 2 * margin,
  pos: { x: margin, y: UI.gridBox.height + margin },
};

UI["questionBox"] = {
  width: GAME.width - UI.sidebar.width - UI.gridBox.width - 2 * margin,
  height: 100,
  pos: { x: UI.gridBox.width + margin, y: margin },
};

UI["algorithmBoxUtilsBox"] = {
  width: UI.questionBox.width,
  height: 100,
  pos: {
    x: UI.gridBox.width + margin,
    y: GAME.height - UI.coins.height - 100 - margin,
  },
};

UI["algorithmBox"] = {
  width: UI.questionBox.width,
  height:
    GAME.height -
    UI.questionBox.height -
    UI.coins.height -
    UI.algorithmBoxUtilsBox.height -
    4 * margin,
  pos: { x: UI.gridBox.width + margin, y: UI.questionBox.height + 2 * margin },
};

export { UI };
