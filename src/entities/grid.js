export function makeGrid(k, gridWidth, gridHeight) {
  // INITIALIZE
  let gridLayout = [];

  // DEFINE: top row
  // Always the same symbol ("^")
  // One row with "^" repeated gridWidth times
  gridLayout.push("^".repeat(gridWidth));

  // DEFINE: middle rows
  // Always the same symbol ("-")
  // gridHeight - 2 rows with "-" repeated gridWidth times
  for (let i = 0; i < gridHeight - 2; i++) {
    gridLayout.push("-".repeat(gridWidth));
  }

  // DEFINE: bottom row
  // Always the same symbol ("v")
  // One row with "v" repeated gridWidth times
  gridLayout.push("v".repeat(gridWidth));

  // DEFINE MEANING OF SYMBOLS TO BE USED IN THE GRID
  // Correspond to names given in `loadAssets.js`
  // Define as object with functions so it can be used in `k.addLevel()`
  let symbols = {
    "^": () => [k.sprite("gridTop")],
    "-": () => [k.sprite("gridCenter")],
    v: () => [k.sprite("gridBottom")],
  };

  return { layout: gridLayout, tiles: symbols };
}
