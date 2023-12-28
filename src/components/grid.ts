import { KaboomCtx } from "kaboom"; // type definition
import { ITEM } from "../params.ts";

export function makeGrid(k: KaboomCtx) {
  // INITIALIZE
  const gridLayout = [];

  // DEFINE: top row
  // Always the same symbol ("^")
  // One row with "^" repeated ITEM.gridWidth times
  gridLayout.push("^".repeat(ITEM.gridWidth));

  // DEFINE: middle rows
  // Always the same symbol ("-")
  // ITEM.gridHeight - 2 rows with "-" repeated ITEM.gridWidth times
  for (let i = 0; i < ITEM.gridHeight - 2; i++) {
    gridLayout.push("-".repeat(ITEM.gridWidth));
  }

  // DEFINE: bottom row
  // Always the same symbol ("v")
  // One row with "v" repeated ITEM.gridWidth times
  gridLayout.push("v".repeat(ITEM.gridWidth));

  // DEFINE MEANING OF SYMBOLS TO BE USED IN THE GRID
  // Correspond to names given in `loadAssets.js`
  // Define as object with functions so it can be used in `k.addLevel()`
  const symbols = {
    "^": () => [k.sprite("gridTop"), k.anchor("center")], // define position from center of image],
    "-": () => [k.sprite("gridCenter"), k.anchor("center")], // define position from center of image],
    v: () => [k.sprite("gridBottom"), k.anchor("center")], // define position from center of image],
  };

  return { layout: gridLayout, tiles: symbols };
}
